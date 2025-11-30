import React, { useRef, useState, useMemo, useEffect } from "react"
import { useGLTF, useFBX, useAnimations } from "@react-three/drei"
import { SkeletonUtils } from "three-stdlib"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"
import { useControls } from "leva"

const corresponding = {
  A: "viseme_PP",
  B: "viseme_kk",
  C: "viseme_I",
  D: "viseme_AA",
  E: "viseme_O",
  F: "viseme_U",
  G: "viseme_FF",
  H: "viseme_TH",
  X: "viseme_PP",
}

export function Model(props) {
  // Load 3D model
  const { scene } = useGLTF("public/models/692c2a53176ba02c5babdf21.glb")

  // Load animations
  const idleFBX = useFBX("/animations/idle.fbx")
  const greetFBX = useFBX("/animations/greeting.fbx")

  const idleClip = useMemo(() => {
    const c = idleFBX.animations[0].clone()
    c.name = "idle"
    return c
  }, [idleFBX])

  const greetClip = useMemo(() => {
    const c = greetFBX.animations[0].clone()
    c.name = "greeting"
    return c
  }, [greetFBX])

  const allAnimations = useMemo(() => [idleClip, greetClip], [idleClip, greetClip])
  const group = useRef()
  const [animation, setAnimation] = useState("idle")
  const { actions } = useAnimations(allAnimations, group)

  // Controls
  const { playAudio, script, headFollow, smoothMorphTarget, morphTargetSmoothing } =
    useControls({
      playAudio: false,
      headFollow: true,
      smoothMorphTarget: true,
      morphTargetSmoothing: 0.5,
      script: { value: "welcome", options: ["welcome"] },
    })

  const audio = useMemo(() => new Audio(`/audio/${script}.wav`), [script])
  const jsonFile = useLoader(THREE.FileLoader, `/audio/${script}.json`)
  const lipsync = JSON.parse(jsonFile)

  // Refs for morphable meshes
  const headMesh = useRef()
  const teethMesh = useRef()

  // Clone model to safely manipulate
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])

  useEffect(() => {
    clone.traverse((child) => {
      if (child.isMesh) {
        if (child.name === "Wolf3D_Head") headMesh.current = child
        if (child.name === "Wolf3D_Teeth") teethMesh.current = child
      }
    })
  }, [clone])

  // Animation effect
  useEffect(() => {
    actions[animation]?.reset().fadeIn(0.5).play()
    return () => actions[animation]?.fadeOut(0.5)
  }, [animation])

  // Play audio and set animation
  useEffect(() => {
  if (playAudio) {
    audio.play()
    requestAnimationFrame(() => {
      setAnimation(script === "welcome" ? "greeting" : "idle")
    })
  } else {
    audio.pause()
    requestAnimationFrame(() => setAnimation("idle"))
  }
}, [playAudio, script])


  // Frame loop for lip-sync and head follow
  useFrame((state) => {
    const h = headMesh.current
    const t = teethMesh.current
    if (!h || !t || !audio) return

    if (headFollow) group.current.getObjectByName("Head")?.lookAt(state.camera.position)

    const currentTime = audio.currentTime

    Object.values(corresponding).forEach((v) => {
      const hi = h.morphTargetDictionary[v]
      const ti = t.morphTargetDictionary[v]
      if (hi !== undefined)
        h.morphTargetInfluences[hi] = smoothMorphTarget
          ? THREE.MathUtils.lerp(h.morphTargetInfluences[hi], 0, morphTargetSmoothing)
          : 0
      if (ti !== undefined)
        t.morphTargetInfluences[ti] = smoothMorphTarget
          ? THREE.MathUtils.lerp(t.morphTargetInfluences[ti], 0, morphTargetSmoothing)
          : 0
    })

    for (let cue of lipsync.mouthCues) {
      if (currentTime >= cue.start && currentTime <= cue.end) {
        const viseme = corresponding[cue.value]
        const hi = h.morphTargetDictionary[viseme]
        const ti = t.morphTargetDictionary[viseme]
        if (hi !== undefined)
          h.morphTargetInfluences[hi] = smoothMorphTarget
            ? THREE.MathUtils.lerp(h.morphTargetInfluences[hi], 1, morphTargetSmoothing)
            : 1
        if (ti !== undefined)
          t.morphTargetInfluences[ti] = smoothMorphTarget
            ? THREE.MathUtils.lerp(t.morphTargetInfluences[ti], 0.8, morphTargetSmoothing)
            : 0.8
        break
      }
    }
  })

  return <group ref={group} {...props} dispose={null}><primitive object={clone} /></group>
}

useGLTF.preload("public/models/692c2a53176ba02c5babdf21.glb")

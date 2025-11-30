import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Model } from "./Model";

export default function AvatarCanvas() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <OrbitControls/>
      <Model position={[0,-4.2,3.5]} scale={3}/>
      <Environment preset="sunset"/>
    </Canvas>
  )
}
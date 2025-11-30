import { Canvas } from "@react-three/fiber"
import { Color } from "three"

export default function AvatarCanvas() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas>
        {/* <color attach="background" args={["#6a1515"]} /> */}
      </Canvas>
    </div>
  )
}

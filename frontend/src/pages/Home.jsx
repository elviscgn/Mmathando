import Navbar from "../components/Navbar"
import AvatarCanvas from "../components/AvatarCanvas"

export default function Home() {
  return (
    <div style={{ paddingTop: "60px" }}> {/* push content below navbar */}
      <Navbar />
      <AvatarCanvas />
    </div>
  )
}

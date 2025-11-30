import React from "react"
import StatusCard from "./StatusCard"
import { FaBed, FaRegSmile, FaTint, FaFire } from "react-icons/fa"

export default function LeftPanel() {
  const dailyStats = [
    { icon: <FaBed style={{ fontSize: 14, color: "#374151" }} />, label: "Sleep: --" },
    { icon: <FaRegSmile style={{ fontSize: 14, color: "#374151" }} />, label: "Mood: --" },
    { icon: <FaTint style={{ fontSize: 14, color: "#374151" }} />, label: "Hydration: --" },
    { icon: <FaFire style={{ fontSize: 14, color: "#374151" }} />, label: "Streak: --" }
  ]

  const weeklyStats = dailyStats // same structure, could differ

  return (
    <div style={{ flex: "0 0 47%", display: "flex", flexDirection: "column", gap: 8, marginTop: 60 }}>
      <div style={{ paddingLeft: "10%", paddingRight: "10%", marginBottom: 12, marginTop: 20, height: "55vh", backgroundColor: "#E5E7EB", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ color: "#9CA3AF", fontSize: 14 }}>TOP SECRET</p>
      </div>

      <div style={{ fontSize: 14, fontWeight: 600, margin: "0 0 4px 0", color: "#374151", marginLeft: "10%", marginRight: "10%" }}>Status Bar</div>

      <div style={{ display: "flex", gap: 12, marginLeft: "10%", marginRight: "10%" }}>
        <StatusCard stats={dailyStats} label="Daily Status" />
        <StatusCard stats={weeklyStats} label="Weekly Average" />
      </div>
    </div>
  )
}

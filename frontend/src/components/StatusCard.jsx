import React from "react"

export default function StatusCard({ stats, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "calc(50% - 6px)" }}>
      <div style={{
        backgroundColor: "#F9FAFB",
        borderRadius: 8,
        padding: 10,
        border: "2px solid #374151",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
      }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            {stat.icon}
            <p style={{ fontSize: 12, margin: 0 }}>{stat.label}</p>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>{label}</div>
    </div>
  )
}

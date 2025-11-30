import { useState, useRef, useEffect } from "react"
import { FaSignOutAlt } from "react-icons/fa"
import pfp from "../assets/pfp.jpeg"

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div style={{ position: "relative" }} ref={ref}>
      {/* Profile pic */}
      <img
        src={pfp}
        alt="Profile"
        style={profileStyle}
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      <div
        style={{
          ...dropdownStyle,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0px)" : "translateY(-5px)",
          pointerEvents: open ? "auto" : "none"
        }}
      >
        {/* Profile info */}
        <img
          src={pfp}
          alt="Profile"
          style={{ width: 50, height: 50, borderRadius: "50%", marginBottom: 6 }}
        />
        <p style={nameStyle}>Elvis Chege</p>
        <p style={emailStyle}>elvischege@gmail.com</p>

        <hr style={dividerStyle} />

        {/* Logout button */}
        <button style={logoutButtonStyle}>
          <FaSignOutAlt style={{ marginRight: 6 }} /> Logout
        </button>
      </div>
    </div>
  )
}

// Styles
const profileStyle = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer",
  border: "2px solid #10B981"
}

const dropdownStyle = {
  position: "absolute",
  top: "42px",
  right: 0,
  width: 180,
  backgroundColor: "#F9FAFB",
  borderRadius: 10,
  padding: "10px 12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "all 0.15s ease",
  zIndex: 20
}

const nameStyle = {
  fontWeight: 600,
  margin: "2px 0",
  color: "#1F2937",
  fontSize: 14
}

const emailStyle = {
  fontSize: 11,
  color: "#6B7280",
  margin: "2px 0 6px 0"
}

const dividerStyle = {
  width: "100%",
  border: "0",
  borderTop: "1px solid #E5E7EB",
  margin: "6px 0"
}

const logoutButtonStyle = {
  width: "100%",
  padding: "6px 0",
  backgroundColor: "#EF4444",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 13,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s"
}

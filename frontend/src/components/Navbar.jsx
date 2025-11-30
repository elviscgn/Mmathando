import { FaGithub, FaCog } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import pfp from "../assets/pfp.jpeg" // import local image

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Privacy Policy", url: "/privacy" }
  ]

  return (
    <nav style={navbarStyle}>
      {/* Left links */}
      <div style={leftStyle}>
        {links.map(link => (
          <NavLink
            key={link.name}
            to={link.url}
            style={({ isActive }) => ({
              ...linkStyle,
              color: isActive ? "#10B981" : "#E5E7EB",
              borderBottom: isActive ? "2px solid #10B981" : "none"
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Right icons */}
      <div style={rightStyle} ref={dropdownRef}>
        <a
          href="https://github.com/elvicgn/Mmathando"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} style={iconStyle} />
        </a>
        <a href="#">
          <FaCog size={20} style={iconStyle} />
        </a>

        {/* Profile picture */}
        <div style={{ position: "relative" }}>
          <img
            src={pfp}
            alt="Profile"
            style={profileStyle}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {/* Dropdown */}
          {dropdownOpen && (
            <div style={dropdownStyle}>
              <img
                src={pfp}
                alt="Profile"
                style={{ width: 60, height: 60, borderRadius: "50%" }}
              />
              <p style={{ margin: "8px 0", fontWeight: 600 }}>Elvis Ndungu</p>
              <button style={logoutButtonStyle}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

// Styles
const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  height: "60px",
  backgroundColor: "#1F2937",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  boxSizing: "border-box",
  zIndex: 10
}

const leftStyle = { display: "flex", gap: "20px" }
const rightStyle = { display: "flex", gap: "15px", alignItems: "center" }

const linkStyle = {
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "16px",
  padding: "5px 10px",
  borderRadius: "4px",
  transition: "all 0.2s",
  cursor: "pointer"
}

const iconStyle = { cursor: "pointer" }
const profileStyle = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  objectFit: "cover",
  cursor: "pointer"
}

const dropdownStyle = {
  position: "absolute",
  top: "40px",
  right: 0,
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "8px",
  padding: "12px",
  minWidth: "150px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 20
}

const logoutButtonStyle = {
  marginTop: "10px",
  padding: "6px 12px",
  backgroundColor: "#EF4444",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
}

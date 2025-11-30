import { FaGithub, FaCog } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import ProfileDropdown from "./ProfileDropdown"

export default function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Privacy Policy", url: "/privacy" }
  ]

  return (
    <div style={navbarContainerStyle}>
      <nav style={navbarStyle}>
        <div style={leftStyle}>
          {links.map(link => (
            <NavLink
              key={link.name}
              to={link.url}
              style={({ isActive }) => ({
                ...linkStyle,
                color: isActive ? "#10B981" : "#374151",
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: "4px"
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div style={rightStyle}>
          <a
            href="https://github.com/elvicgn/Mmathando"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} fill={iconColor} style={iconStyle} />
          </a>
          <a href="#">
            <FaCog size={20} fill={iconColor} style={iconStyle} />
          </a>

          <ProfileDropdown />
        </div>
      </nav>

      {/* Divider */}
      <div style={dividerStyle}></div>
    </div>
  )
}

/* STYLES */
const navbarContainerStyle = {
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 10,
  background: "#fff"
}

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
  height: "60px",
  backgroundColor: "#fff",
  boxSizing: "border-box"
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
const iconColor = "#3E8A6F"

const dividerStyle = {
  width: "100%",
  height: "1px",
  backgroundColor: "#E5E7EB"
}

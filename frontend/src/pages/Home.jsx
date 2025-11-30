import React, {useState} from "react"
import Navbar from "../components/Navbar"
import {
  FaPlus,
  FaMicrophone,
  FaPaperPlane,
  FaTint,
  FaRegSmile,
  FaBed,
  FaFire
} from "react-icons/fa"

export default function HomePage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, how are you feeling today?" },
    { from: "user", text: "I'm good, thanks!" },
    { from: "bot", text: "Remember to drink water 💧" }
  ])
  const [inputText, setInputText] = useState("")

  const handleSend = () => {
    if (!inputText.trim()) return
    // Add user message
    setMessages(prev => [...prev, { from: "user", text: inputText }])
    setInputText("")
    // Optional: Add bot auto-reply after short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Got it! Keep up the good work 💪" }
      ])
    }, 500)
  }

  return (
    <div>
      <Navbar />

      <div style={containerStyle}>
        {/* Left div */}
        <div style={leftDivStyle}>
          <div style={modelWrapperStyle}>
            <div style={modelDivStyle}>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>TOP SECRET</p>
            </div>
          </div>

          <div style={statusLabelStyle}>Status Bar</div>

          {/* Status cards */}
          <div style={statusDivStyle}>
            {/* Daily */}
            <div style={cardColumnStyle}>
              <div style={cardStyle}>
                <div style={statRow}>
                  <FaBed style={statIcon} />
                  <p style={statTextStyle}>Sleep: --</p>
                </div>
                <div style={statRow}>
                  <FaRegSmile style={statIcon} />
                  <p style={statTextStyle}>Mood: --</p>
                </div>
                <div style={statRow}>
                  <FaTint style={statIcon} />
                  <p style={statTextStyle}>Hydration: --</p>
                </div>
                <div style={statRow}>
                  <FaFire style={statIcon} />
                  <p style={statTextStyle}>Streak: --</p>
                </div>
              </div>
              <div style={cardSubLabelStyle}>Daily Status</div>
            </div>

            {/* Weekly */}
            <div style={cardColumnStyle}>
              <div style={cardStyle}>
                <div style={statRow}>
                  <FaBed style={statIcon} />
                  <p style={statTextStyle}>Sleep: --</p>
                </div>
                <div style={statRow}>
                  <FaRegSmile style={statIcon} />
                  <p style={statTextStyle}>Mood: --</p>
                </div>
                <div style={statRow}>
                  <FaTint style={statIcon} />
                  <p style={statTextStyle}>Hydration: --</p>
                </div>
                <div style={statRow}>
                  <FaFire style={statIcon} />
                  <p style={statTextStyle}>Streak: --</p>
                </div>
              </div>
              <div style={cardSubLabelStyle}>Weekly Average</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={dividerStyle}></div>

        {/* Right div */}
        <div style={rightDivStyle}>
          <h3 style={chatTitleStyle}>Chat with Mmathando</h3>

          <div style={chatBoxStyle}>
            {messages.map((msg, idx) =>
              msg.from === "user" ? (
                <div key={idx} style={msgBubbleUser}>
                  {msg.text}
                </div>
              ) : (
                <div key={idx} style={msgBubbleBot}>
                  {msg.text}
                </div>
              )
            )}
          </div>

          {/* Chat input bar */}
          <div style={inputWrapper}>
            <div style={inputSection}>
              <FaPlus style={iconAdd} />
              <input
                type="text"
                placeholder="Tell me how you're feeling right now..."
                style={inputField}
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
              />
              <FaMicrophone style={iconMic} />
            </div>

            <button style={sendBtn} onClick={handleSend}>
              <FaPaperPlane />
            </button>
          </div>

          <p style={footerStyle}>
            Mmathando can make mistakes. Made with ♥️ by WeThinkCode’s MetaMedics.
          </p>
        </div>
      </div>
    </div>
  )
}

/* STYLES */

const containerStyle = {
  display: "flex",
  width: "100vw",
  height: "100vh",       // full viewport
  padding: "0 20px 20px 20px",
  boxSizing: "border-box"
}

const leftDivStyle = {
  flex: "0 0 47%",
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 60         // push content below fixed navbar
}

const modelWrapperStyle = {
  paddingLeft: "10%",
  paddingRight: "10%",
  marginBottom: 12,
  marginTop: 20 // push model down
}

const modelDivStyle = {
  width: "100%",
  height: "55vh",
  backgroundColor: "#E5E7EB",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const statusLabelStyle = {
  fontSize: 14,
  fontWeight: 600,
  margin: "0 0 4px 0",
  color: "#374151",
  marginLeft: "10%",
  marginRight: "10%"
}

const statusDivStyle = {
  display: "flex",
  gap: 12,
  marginLeft: "10%",
  marginRight: "10%"
}

const cardColumnStyle = {
  display: "flex",
  flexDirection: "column",
  width: "calc(50% - 6px)"
}

const cardStyle = {
  backgroundColor: "#F9FAFB",
  borderRadius: 8,
  padding: 10,
  border: "2px solid #374151",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
}

const statRow = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginBottom: 6
}

const statIcon = {
  fontSize: 14,
  color: "#374151"
}

const statTextStyle = {
  fontSize: 12,
  margin: 0
}

const cardSubLabelStyle = {
  fontSize: 11,
  color: "#6B7280",
  marginTop: 4
}

const dividerStyle = {
  width: 1,
  height: "100%",       // full container height
  backgroundColor: "#D1D5DB",
  margin: "0 10px"
}

const rightDivStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 10,
  marginTop: 60,        // push content below navbar
  boxSizing: "border-box"
}

const chatTitleStyle = {
  textAlign: "center",
  marginBottom: 8
}

const chatBoxStyle = {
  flex: 1,
  backgroundColor: "#fff",

  borderRadius: 8,
  padding: 8,
  display: "flex",
  flexDirection: "column",
  gap: 6,
  overflowY: "auto"
}

const msgBubbleUser = {
  alignSelf: "flex-end",
  backgroundColor: "#85C67D",
  color: "#000",
  padding: "6px 10px",
  borderRadius: "15px 15px 0 15px",
  fontSize: 12,
  maxWidth: "80%"
}

const msgBubbleBot = {
  alignSelf: "flex-start",
  backgroundColor: "#3E8A6F",
  color: "#fff",
  padding: "6px 10px",
  borderRadius: "0 10px 10px 10px",
  fontSize: 12,
  maxWidth: "80%"
}

/* Chat input bar */
const inputWrapper = {
  display: "flex",
  gap: 8,
  marginTop: 8
}

const inputSection = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: "10px 10px",
  color: "#3E8A6F",
  border: "2px solid #437A57"
}

const inputField = {
  flex: 1,
  border: "none",
  outline: "none",
  fontSize: 13,
  marginLeft: 6
}

const iconAdd = {
  fontSize: 16,
  color: "#427B56",
  cursor: "pointer"
}

const iconMic = {
  fontSize: 16,
  color: "#427B56",
  cursor: "pointer",
  marginLeft: 6
}

const sendBtn = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#437A57",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "0 14px",
  cursor: "pointer",
  fontSize: 14
}

const footerStyle = {
  fontSize: 11,
  textAlign: "center",
  color: "#6B7280",
  marginTop: 6
}

import React, { useState } from "react"
import Navbar from "../components/Navbar"
import LeftPanel from "../components/LeftPanel"
import RightPanel from "../components/RightPanel"

export default function HomePage() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, how are you feeling today?" },
    { from: "user", text: "I'm good, thanks!" },
    { from: "bot", text: "Remember to drink water 💧" }
  ])
  const [inputText, setInputText] = useState("")

  const handleSend = () => {
    if (!inputText.trim()) return
    setMessages(prev => [...prev, { from: "user", text: inputText }])
    setInputText("")
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: "Got it! Keep up the good work 💪" }])
    }, 500)
  }

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", width: "100vw", height: "100vh", padding: "0 20px 20px 20px", boxSizing: "border-box" }}>
        <LeftPanel />
        <div style={{ width: 1, backgroundColor: "#D1D5DB", margin: "0 10px" }} />
        <RightPanel messages={messages} inputText={inputText} setInputText={setInputText} handleSend={handleSend} />
      </div>
    </div>
  )
}

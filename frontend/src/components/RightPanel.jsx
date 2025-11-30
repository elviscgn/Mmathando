import React, { useEffect, useRef } from "react"
import ChatInput from "./ChatInput"

export default function RightPanel({ messages, inputText, setInputText, handleSend }) {
  const chatEndRef = useRef(null)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#fff", borderRadius: 10, padding: 10, marginTop: 60, boxSizing: "border-box" }}>
      <h3 style={{ textAlign: "center", marginBottom: 8 }}>Chat with Mmathando</h3>

      <div style={{ flex: 1, backgroundColor: "#fff", borderRadius: 8, padding: 8, display: "flex", flexDirection: "column", gap: 6, overflowY: "auto" }}>
        {messages.map((msg, idx) => msg.from === "user" ? (
          <div key={idx} style={{ alignSelf: "flex-end", backgroundColor: "#85C67D", color: "#000", padding: "6px 10px", borderRadius: "15px 15px 0 15px", fontSize: 12, maxWidth: "80%" }}>
            {msg.text}
          </div>
        ) : (
          <div key={idx} style={{ alignSelf: "flex-start", backgroundColor: "#3E8A6F", color: "#fff", padding: "6px 10px", borderRadius: "0 10px 10px 10px", fontSize: 12, maxWidth: "80%" }}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <ChatInput inputText={inputText} setInputText={setInputText} handleSend={handleSend} />

      <p style={{ fontSize: 11, textAlign: "center", color: "#6B7280", marginTop: 6 }}>
        Mmathando can make mistakes. Made with ♥️ by WeThinkCode’s MetaMedics.
      </p>
    </div>
  )
}

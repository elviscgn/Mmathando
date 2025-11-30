import React from "react"
import { FaPlus, FaMicrophone, FaPaperPlane } from "react-icons/fa"

export default function ChatInput({ inputText, setInputText, handleSend }) {
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: "10px 10px",
        color: "#3E8A6F",
        border: "2px solid #437A57"
      }}>
        <FaPlus style={{ fontSize: 16, color: "#427B56", cursor: "pointer" }} />
        <input
          type="text"
          placeholder="Tell me how you're feeling right now..."
          style={{ flex: 1, border: "none", outline: "none", fontSize: 13, marginLeft: 6 }}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <FaMicrophone style={{ fontSize: 16, color: "#427B56", cursor: "pointer", marginLeft: 6 }} />
      </div>

      <button style={{
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
      }} onClick={handleSend}>
        <FaPaperPlane />
      </button>
    </div>
  )
}

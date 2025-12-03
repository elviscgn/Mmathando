import Navbar from "../components/Navbar";
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      {/* PAGE STYLING */}
      <style>{`
        body {
          margin: 0;
          font-family: "Inter", sans-serif;
        }

        .signup-wrapper {
          height: calc(100vh - 60px);
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #437A57, #5A9367, #437A57);
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .signup-card {
          background: white;
          width: 400px;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .signup-card h1 {
          font-size: 2rem;
          margin: 0;
        }

        .signup-card p {
          color: #555;
          margin-bottom: 25px;
        }

        .signup-card a {
          color: #437A57;
          text-decoration: none;
          font-weight: 600;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          border: 1.8px solid #d9d9d9;
          border-radius: 10px;
          margin-bottom: 20px;
          font-size: 15px;
        }

        /* PASSWORD EYE */
        .password-wrapper {
          position: relative;
        }

        .toggle-password {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          opacity: 0.6;
        }

        .toggle-password:hover {
          opacity: 1;
        }

        /* CHECKBOX */
        .checkbox-area {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 25px;
          font-size: 14px;
          color: #444;
        }

        /* SIGN UP BUTTON */
        .signup-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #437A57, #5A9367);
          border: none;
          color: white;
          font-size: 16px;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .signup-btn:hover {
          opacity: 0.92;
        }

        /* FOOTER TEXT */
        .footer-text {
          font-size: 12px;
          color: #555;
          text-align: center;
          margin-top: 18px;
        }

      `}</style>

      {/* SIGNUP CONTENT */}
      <div className="signup-wrapper">
        <div className="signup-card">
          <h1>Sign up</h1>
          <p>
            Create an account or <a href="/login">Sign in</a>
          </p>

          <label>Email address</label>
          <input type="email" className="input-field" placeholder="Enter your email" />

          <label>Username</label>
          <input type="text" className="input-field" placeholder="Choose a username" />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="Enter password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          <div className="checkbox-area">
            <input type="checkbox" />
            <span>I do not want to receive marketing emails</span>
          </div>

          <button className="signup-btn">Sign Up</button>

          <p className="footer-text">
            By signing up, you accept our terms of service and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

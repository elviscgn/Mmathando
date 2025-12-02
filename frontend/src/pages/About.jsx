import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      {/* INLINE PAGE STYLES */}
      <style>{`
        .about-container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: "Inter", sans-serif;
        }

        h1 {
          font-size: 1.05rem;
          color: black;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 1.05rem;
          color: black;
          margin-top: 30px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .info-box {
          background: #F3F4F6;
          padding: 15px 20px;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          margin-bottom: 18px;
          line-height: 1.6;
        }

        .offer-list {
          background: #F3F4F6;
          padding: 15px 20px;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          list-style: none;
        }

        .offer-list li {
          padding: 8px 0;
          font-size: 1rem;
        }

        /* TEAM GRID */
        .team-grid {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .team-card {
          background: #F3F4F6;
          width: 160px;
          padding: 15px;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          text-align: center;
        }

        .team-name {
          margin: 10px 0 5px 0;
          font-weight: 600;
        }

        .github-icon {
          font-size: 28px;
          color: black;
          margin-top: 5px;
          cursor: pointer;
        }

        .github-icon:hover {
          opacity: 0.7;
        }
      `}</style>

      <div className="about-container">
        <h1>About</h1>

        <div className="info-box">
          Mmathando is a lightweight health assistant with a 3D avatar, text + voice
          responses, and quick daily check-ins. Built with React + TypeScript and FastAPI,
          it uses Llama for reasoning and guidance.
        </div>

        <div className="info-box">
          Mmathando was created to make everyday health guidance more accessible, calm,
          and supportive. Many people struggle with knowing whether symptoms are serious,
          when to seek medical care, or how to maintain healthy habits. Mmathando offers
          gentle, non-diagnostic guidance and reassurance to help people feel safer and
          more informed.
        </div>

        <h2 className="section-title">What Mmathando Offers</h2>

        <ul className="offer-list">
          <li> Symptom-based guidance (non-diagnostic)</li>
          <li> Daily wellness check-ins</li>
          <li> Calm explanations for recovery & procedures</li>
          <li> Nearby clinic/hospital suggestions</li>
          <li> Hotline support for urgent concerns</li>
        </ul>

        <h2 className="section-title">Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-name">Nothando Ndlovu</div>
            <a href="https://github.com/nothando-debug" target="_blank">
              <FaGithub className="github-icon" />
            </a>
          </div>

          <div className="team-card">
            <div className="team-name">Elvis Chege</div>
            <a href="https://github.com/elviscgn" target="_blank">
              <FaGithub className="github-icon" />
            </a>
          </div>

          <div className="team-card">
            <div className="team-name">Mmabatho Thathana</div>
            <a href="https://github.com/Mmabatho-21" target="_blank">
              <FaGithub className="github-icon" />
            </a>
          </div>

          <div className="team-card">
            <div className="team-name">Mphele Moswane</div>
            <a href="https://github.com/Mphele" target="_blank">
              <FaGithub className="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



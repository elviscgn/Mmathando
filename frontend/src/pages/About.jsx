import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <style>{`
        .about-page {
          background: #f4f9f6;
          min-height: 100vh;
          font-family: "Inter", sans-serif;
          padding-top: 80px;
        }

        .about-container {
          max-width: 900px;
          margin: auto;
          padding: 30px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(67, 122, 87, 0.12);
          border: 2px solid rgba(67, 122, 87, 0.15);
        }

        .title {
          text-align: center;
          font-size: 2.3rem;
          color: #437A57;
          margin-bottom: 20px;
        }

        .text {
          line-height: 1.7;
          color: #333;
          margin-bottom: 18px;
        }

        .section-title {
          margin-top: 30px;
          font-size: 1.6rem;
          color: #5A9367;
        }

        .cute-list {
          background: #f0f7f3;
          padding: 15px 20px;
          border-radius: 15px;
          border-left: 5px solid #437A57;
          list-style: none;
          margin-bottom: 25px;
        }

        .cute-list li {
          padding: 8px 0;
          color: #333;
        }

        .team-list {
          margin-top: 15px;
          list-style: none;
          padding: 0;
        }

        .team-list li {
          padding: 8px 0;
          font-size: 1rem;
        }

        .team-list a {
          color: #437A57;
          text-decoration: none;
          font-weight: 600;
        }

        .team-list a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="about-page">
        <div className="about-container">
          <h1 className="title">About Mmathando</h1>

          <p className="text">
            Mmathando is a lightweight health assistant with a 3D avatar, text + voice
            responses, and quick daily check-ins. Built with React + TypeScript and FastAPI,
            it uses Llama for reasoning and guidance.
          </p>

          <p className="text">
            Mmathando was created to make everyday health guidance more accessible, calm,
            and supportive. Many people struggle with knowing whether symptoms are serious,
            when to seek medical care, or how to maintain healthy habits. We built
            Mmathando to offer clear, non-diagnostic guidance, simple daily check-ins,
            and reassurance that helps users feel informed and confident.
          </p>

          <h2 className="section-title">What Mmathando Provides</h2>
          <ul className="cute-list">
            <li>Symptom-based guidance (non-diagnostic)</li>
            <li>Daily wellness tracking</li>
            <li>Calm explanations for procedures and recovery</li>
            <li>Nearby clinic/hospital locations</li>
            <li>Hotline support for urgent concerns</li>
          </ul>

          <h2 className="section-title">Features</h2>
          <ul className="cute-list">
            <li>3D Avatar</li>
            <li>Chat + Voice responses</li>
            <li>Daily Check-in</li>
            <li>Health guidance & recovery suggestions</li>
            <li>Stats Panel for wellness overview</li>
          </ul>

          <h2 className="section-title">Our Team</h2>
          <ul className="team-list">
            <li>
              Nothando Ndlovu –{" "}
              <a href="https://github.com/nothando-debug" target="_blank">Github</a>
            </li>

            <li>
              Elvis Chege –{" "}
              <a href="https://github.com/elviscgn" target="_blank">Github</a>
            </li>

            <li>
              Mmabatho Thathana –{" "}
              <a href="https://github.com/Mmabatho-21" target="_blank">Github</a>
            </li>

            <li>
              Mphele Moswane –{" "}
              <a href="https://github.com/Mphele" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


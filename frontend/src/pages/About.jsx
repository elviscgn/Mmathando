import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <style>{`
        .about-container {
          max-width: 900px;
          margin: auto;
          padding: 20px;
          font-family: "Zain", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 0.8rem;
          color: #053010ff;
          font-size: 0.95rem;


        }

        h1 {
          font-size: 2rem;
          color:  #043310ff;
          margin-bottom: 20px;
          text-align: center
        }

        .section-title {
          font-size: 2rem;
          color: #0a3c17ff;
          margin-top: 30px;
          margin-bottom: 12px;
          font-weight: 600;
          text-align: center;

        }

        .info-box {
          background:  #b3efc6ff;
          padding: 15px 20px;
          border-radius: 11px;
          border: 1px solid  #0c652aff;
          margin-bottom:20px  ;
          line-height: 1.6;
          max-width: 700px;


          

        }

        .offer-list {
          background: #b3efc6ff;
          padding: 15px 20px;
          border-radius: 25px;
          border: 1px solid #0c652aff;
          list-style: none;
          max-width: 600px;
          margin: 0 auto;
          text-align: ;
          color: #053010ff;
          
          
        }

        .offer-list li {
          padding: 8px 0;
          font-size: 0.95rem;
          text-align: center;
          
          

        }

        .team-grid {
          display: flex;
          gap: 20px;
          margin-top: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .team-card {
          background: #b3efc6ff;
          width: 160px;
          padding: 12px;
          border-radius: 11px;
          border: 1px solid #0c652aff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-name {
          margin: 10px 0 8px 0;
          font-weight: 600;
          color: #043310ff;
          font-size: 1.2rem;
        }

        .team-role {
          font-size: 0.95rem;
          color: #043310ff;
          margin-top: 8px;
          line-height: 1.2;
        }

        .github-pfp {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 2px solid #000;
          object-fit: cover;
          cursor: pointer;
          margin: 0 auto;
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
          <li>Symptom-based guidance (non-diagnostic)</li>
          <li>Daily wellness check-ins</li>
          <li>Calm explanations for recovery & procedures</li>
          <li>Nearby clinic/hospital suggestions</li>
          <li>Hotline support for urgent concerns</li>
        </ul>

        <h2 className="section-title">Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-name">Nothando Ndlovu</div>
            <a href="https://github.com/nothando-debug" target="_blank">
              <img
                src="https://github.com/nothando-debug.png"
                alt="Nothando GitHub"
                className="github-pfp"
              />
            </a>
            <div className="team-role">Software Developer | Backend</div>
          </div>

          <div className="team-card">
            <div className="team-name">Elvis Chege</div>
            <a href="https://github.com/elviscgn" target="_blank">
              <img
                src="https://github.com/elviscgn.png"
                alt="Elvis GitHub"
                className="github-pfp"
              />
            </a>
            <div className="team-role">Team Lead | Frontend | 3D Model</div>
          </div>

          <div className="team-card">
            <div className="team-name">Mmabatho Thathana</div>
            <a href="https://github.com/Mmabatho-21" target="_blank">
              <img
                src="https://github.com/Mmabatho-21.png"
                alt="Mmabatho GitHub"
                className="github-pfp"
              />
            </a>
            <div className="team-role">Software Developer | UX/UI</div>
          </div>

          <div className="team-card">
            <div className="team-name">Mphele Moswane</div>
            <a href="https://github.com/Mphele" target="_blank">
              <img
                src="https://github.com/Mphele.png"
                alt="Mphele GitHub"
                className="github-pfp"
              />
            </a>
            <div className="team-role">Software Developer | Backend | AI Integration</div>
          </div>
        </div>
      </div>
    </div>
  );
}

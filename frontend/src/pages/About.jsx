import Navbar from "../components/Navbar"

export default function About() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <h1>About Mmathando</h1><br />

      <p>
        Mmathando is a lighweight health assistant with a 3D avatar , text + voice responses, and quick  daily  check-ins. Built with React + TypeScript and bFastAPI, it uses Llama for reasoning and guidance.</p><br />
      <p>
        Mmathando was craeted to make everyday health guidance more accessible, calm , and supportive. Many people struggle with knowing whether symptoms are serious, when to seek medical care, or how to maintain healthy habits. This uncertainty often leads to medical anxiety and delayed decisions. We built Mmathando to often clear, non-diagnostic guidance, simple daily check-ins, and reassurance that helps users feel more informed and confident. It does not replace healthcare professionals, but it empowers people to understand their wellbeing and take safe, timely next steps.</p><br />
      <p>Mmathando provides:</p>
      <ul>
        <li>Symptom-based guidance (non-diagnostic)</li>
        <li>Daily wellness tracking</li>
        <li>Calm explanations for procedures and reovery</li>
        <li>Nearby clinic/hospital locations</li>
        <li>Hotline support for urgent concerns</li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>3D Avatar</li>
        <li>Chat + Voice resposnes</li>
        <li>Daily Check-in</li>
        <li>Health Guidance and recovery suggestions</li>
        <li>Stats Panel for wellness overview</li><br />
        <h2>Our Team</h2>
        <ul>
          <li>Nothando Ndlovu - 
            <a href="https://github.com/nothando-debug" target="_blank">
            Github</a> 
          </li>

          <li>Elvis Chege -
            <a href="https://github.com/elviscgn" target="_blank">
            Github</a>
          </li>



          <li>Mmabatho Thathana -
            <a href="https://github.com/Mmabatho-21" target="_blank">
            Github</a> 
            </li>

          <li>Mphele Moswane -
            <a href="https://github.com/Mphele" target="_blank">
            Github</a>
            </li>
        </ul>
      </ul>

    </div>
  )
}

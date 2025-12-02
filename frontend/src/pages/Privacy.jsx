import Navbar from "../components/Navbar"

export default function Privacy() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />
      <h1>Privacy Policy</h1><br />
      <p>Mmathando is commited to protecting your privacy and ensuring your personal health and wellness information is handled safely.This Privacy Policy explans what data we collect, how we use it, and right as a user</p>
      
      

      <h2>1. Information we may collect</h2>
      <p>When you use Mmathando, we may collect:</p>
      <ul>
        <li><strong>Personal information: </strong>Name, Age, Email, or Login details.</li>
        <li><strong>Health-related information: </strong>Sleep, Hydration, Mood, Symptoms, and Wellness Goals.</li>
        <li><strong>Location data: </strong>If using "Nearest Medical facilities" feature.</li>
    
      </ul>
      <p>We do not collect information you do not provide or use  it without your consent.</p>

      

      <h2>3. Data sharing and Third Parties</h2>
      <ul>
        <li>We do <strong>not</strong> sell or share your personal information with adverstisers or third-party</li>
      </ul>

      <h2>2. How we Use Your information</h2>
      <p> Your data is used to provide helpul guidance ,, trackwellness, and improve app functionality.</p>
      <p><strong>Message Processing and Privacy:</strong>
      When you send a message , it is fowarded to our AI model (Llama) to generate a response. your real name is <strong>never</strong>sent to the model. Instead, we replace your name with a placeholder before sending it.When the response is returned, we replace the placeholder with your actual name on your screen. This ensures the model never sees personal identity data</p>

     
     
     <h2>3. Data sharing and Third Parties</h2>
     <ul>
      <li>We do <strong>not</strong> sell or share your personal information with advertiser or thid-party companies</li>
      <li>Third-party services we use:
        <ul>
          <li>llama API for AI responses (with anonymized data).</li>
          <li>Google Maps API for location features.</li>
          <li>Google login for analytics or AI processing is anonymized.</li>
        </ul>
      </li>
     </ul>

     

     <h2>4. Data Storage and Security</h2>
     <ul>
      <li> Data is stored securely on protected servers.</li>
      <li>Personal information is encrypted where possible.</li>
      <li>Only authorized personnel can access sensitive data.</li>
      <li>Data used for analytics or AI processing is anonymized</li>
     </ul>

     

     <h2>5. Retention of Data</h2>
     <p>We retain your data only as long as necessary to provide the service or comply legal  obligation. You may request deletion</p>

     

     <h2>6. Your Rights</h2>
     <ul>
      <li>Access your Data</li>
      <li>Update or correct information.</li>
      <li>Request deletion of account and associated data</li>
      <li>Withdraw consent for data processing or location access</li>
     </ul>
    
    

    <h2>7. Children's Privacy</h2>
    <p>Mmathando is not intended for users under the age of 12 years. We do not knowingly collect data from children</p>

    

    <h2>8. Update to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Any chnages will be posted within the app , with effective date updated</p>

    </div>
  )
}

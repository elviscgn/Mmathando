import Navbar from "../components/Navbar"

export default function Privacy() {
  return (
    <div style={{ paddingTop: "60px" }}>
      <Navbar />

      <h1>How to Use</h1>
      <br />

      <section>
        <h2> Introduction</h2>
        <p>
          In this video, we will walk you through how to use our platform step-by-step.
          We'll show you how to navigate the features, create an account, and get started.
        </p>
      </section>

      <section>
        <h2>🎥 Watch the Tutorial</h2>
        <div style={{ marginTop: "10px" }}>
          {/* Replace the link with our actual YouTube video link when ready */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="YouTube tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section>
        <h2> Steps Shown in the Video</h2>
        <ol>
          <li>Open the platform and navigate to the homepage.</li>
          <li>Create your account or log in.</li>
          <li>Explore your dashboard features.</li>
          <li>Update your profile and settings.</li>
          <li>Start using the main features of the platform.</li>
        </ol>
      </section>

      <section>
        <h2> Need More Help?</h2>
        <p>
          If you still have questions after watching the video, feel free to contact us
          through our support page.
        </p>
      </section>

    </div>
  )
}

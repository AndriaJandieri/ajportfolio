const AiProjects = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        margin: "20px auto",
        maxWidth: "1080px",
      }}
    >
      <h1 className="r-card-heading">AI Engeneering</h1>

      {/* White description, no underline */}
      <p
        className="proj-card-text-header"
        style={{
          maxWidth: "100%",
          marginBottom: "15px",
          color: "white",
          textDecoration: "none", // makes sure no underline appears
        }}
      >
        Developed Demo version of upcoming Web-based game using Google AI Studio with JavaScript, HTML, CSS, and JSON, AI handled all sounds, background music, and UI design. Ingame zombies are harmless, ensuring every player can reach the final chest, which automatically downloads my resume.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "65%", // aspect ratio
        }}
      >
        <iframe
          src="https://andriajandieri.github.io/MoonlightGraveyard/"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
          title="My JavaScript Game"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AiProjects;

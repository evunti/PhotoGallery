export default function AboutPage() {
  return (
    <main
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
          color: "#222",
          textAlign: "center",
        }}
      >
        About
      </h1>
      <div
        style={{
          maxWidth: 600,
          color: "#444",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        <p>
          Welcome to my Photo Gallery! This is a simple gallery built with
          Next.js and Sanity.
        </p>
        <p>
          <a
            href="https://instagram.com/zhenya.untilova"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#405de6", textDecoration: "none" }}
          ></a>
          .
        </p>
      </div>
    </main>
  );
}

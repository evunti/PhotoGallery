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
      <div
        style={{
          width: "100vw",
          height: 600,

          color: "#444",
          fontSize: 18,
          textAlign: "center",
          backgroundImage: "url('/images/profile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            color: "#555555",
            padding: "1rem 1.5rem",
            marginBottom: "18rem",
            width: "100%",
            maxWidth: 600,
            margin: "1rem auto",
          }}
        >
          <p>
            Welcome to my Photo Gallery! Among these pages, you will find a
            collection of photos, organized into albums.
          </p>
        </div>
      </div>
    </main>
  );
}

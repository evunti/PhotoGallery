export default function AboutPage() {
  return (
    <main
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          marginTop: 0,
        }}
      >
        <div
          style={{
            borderRadius: "1rem",
            padding: "2rem 1.5rem",
            width: "100%",
            maxWidth: 600,
            margin: "0 auto",
            marginBottom: "17rem",
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

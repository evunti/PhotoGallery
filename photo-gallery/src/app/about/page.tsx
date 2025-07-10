"use client";
import Image from "next/image";

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
      {/* <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
          color: "#222",
          textAlign: "center",
        }}
      >
        About
      </h1> */}

      <div
        style={{
          width: "100vw", // or "100%"
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
            color: "#fff",
            // padding: "rem",
            marginBottom: "1rem",
            width: "100%",
          }}
        >
          <p>
            Welcome to my Photo Gallery! Among these pages, you will find a
            collection of my photos, organized into albums. This is a simple
            gallery built with Next.js and Sanity.
          </p>
        </div>
      </div>
      {/* <Image
        src="/images/profile.jpg"
        alt="Instagram profile photo"
        width={1500}
        height={1200}
        style={{
          margin: "16px 0",
          opacity: 1,
          objectFit: "cover",
          textAlign: "center",
        }}
      /> */}
    </main>
  );
}

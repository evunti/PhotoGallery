import Link from "next/link";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto 32px auto",
            display: "flex",
            justifyContent: "flex-end",
            gap: 24,
            padding: "1.5rem 2rem 0 2rem",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#444444",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            About
          </Link>
          <Link
            href="/gallery"
            style={{
              color: "#444444",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Gallery
          </Link>
        </nav>
        {children}
        <footer
          style={{
            width: "100%",
            textAlign: "center",
            padding: "1rem 0",
            color: "#888",
            fontSize: 15,
            background: "#f8fafc",
          }}
        >
          &copy; {new Date().getFullYear()} Evunti Photography |
          <a
            href="https://instagram.com/zhenya.untilova"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#405de6", textDecoration: "none", marginLeft: 6 }}
          >
            Instagram
          </a>
        </footer>
      </body>
    </html>
  );
}

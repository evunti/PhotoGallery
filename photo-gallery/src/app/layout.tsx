import "@/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 40,
            padding: "1.5rem 0 1rem 0",
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

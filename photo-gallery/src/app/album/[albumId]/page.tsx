import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface AlbumPageProps {
  params: { albumId: string };
}

const albumQuery = `*[_type == "photoAlbum" && _id == $albumId][0]{title, description, photos}`;

export default async function AlbumPage({ params }: AlbumPageProps) {
  const album = await client.fetch(albumQuery, { albumId: params.albumId });
  if (!album) return <main style={{ padding: 32 }}>Album not found.</main>;

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          color: "#0070f3",
          textDecoration: "none",
          marginBottom: 32,
          fontWeight: 500,
          fontSize: 16,
          letterSpacing: 0.2,
          opacity: 0.8,
          transition: "opacity 0.2s",
        }}
      >
        ← Back to Albums
      </Link>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          color: "#18181b",
          textAlign: "center",
          letterSpacing: "-0.01em",
        }}
      >
        {album.title}
      </h1>
      <p
        style={{
          color: "#666",
          marginBottom: "2.5rem",
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        {album.description}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "0.2rem",
          width: "100%",
          maxWidth: 1000,
          justifyItems: "center",
        }}
      >
        {album.photos?.map((photo: any, idx: number) => {
          if (!photo || !photo.asset || !photo.asset._ref) return null;
          return (
            <Image
              key={idx}
              src={urlFor(photo).width(400).height(400).fit("crop").url()}
              alt={photo.alt || "Photo"}
              width={400}
              height={400}
              style={{
                borderRadius: 0,
                objectFit: "cover",
                width: 140,
                height: 140,
                background: "#f4f4f5",
                boxShadow: "none",
                transition: "box-shadow 0.2s",
                display: "block",
                margin: "0",
              }}
            />
          );
        })}
      </div>
    </main>
  );
}

// Update the path below if your client file is in a different location
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// GROQ query to get all albums and their photos
const albumsQuery = `*[_type == "photoAlbum"]{_id, title, description, photos}`;

export default async function GalleryPage() {
  const albums = await client.fetch(albumsQuery);

  return (
    <main
      style={{
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          marginBottom: "2rem",
          color: "#222",
          textAlign: "center",
        }}
      >
        Photo Albums
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {albums.map((album: any) => {
          const coverPhoto = album.photos?.[0];
          return (
            <Link
              key={album._id}
              href={`/album/${album._id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
                borderRadius: 16,
                boxShadow: "0 2px 12px #0002",
                padding: "1.5rem",
                minWidth: 260,
                maxWidth: 320,
                aspectRatio: "1 / 1.1",
                flex: "1 1 260px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "box-shadow 0.2s",
                cursor: "pointer",
              }}
            >
              {coverPhoto && (
                <Image
                  src={urlFor(coverPhoto)
                    .width(400)
                    .height(400)
                    .fit("crop")
                    .url()}
                  alt={coverPhoto.alt || album.title}
                  width={400}
                  height={400}
                  style={{
                    borderRadius: 12,
                    objectFit: "cover",
                    width: "100%",
                    height: 200,
                    background: "#eee",
                    marginBottom: 16,
                    aspectRatio: "1 / 1",
                  }}
                />
              )}
              <h2
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  margin: 0,
                  color: "#333",
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                {album.title}
              </h2>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

// Removed SanityImage, now handled in album/[albumId]/page.tsx

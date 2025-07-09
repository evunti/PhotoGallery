import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export function PhotoGrid({ photos }: { photos: any[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "repeat(600, 3fr)",
        gap: "0.2rem",
        width: "100%",
        maxWidth: 1000,
        justifyItems: "center",
      }}
    >
      {photos?.map((photo: any, idx: number) => {
        if (!photo?.asset?._ref) return null;
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
              display: "block",
              margin: 0,
            }}
          />
        );
      })}
    </div>
  );
}

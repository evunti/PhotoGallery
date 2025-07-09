import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export function PhotoGrid({ photos }: { photos: any[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2px",
        maxWidth: 1000,
        justifyItems: "center",
      }}
    >
      {photos?.map((photo: any, idx: number) => {
        if (!photo?.asset?._ref) return null;
        return (
          <Image
            key={idx}
            src={urlFor(photo).width(800).height(800).fit("crop").dpr(2).url()}
            alt={photo.alt || "Photo"}
            width={400}
            height={400}
            style={{
              borderRadius: 0,
              objectFit: "cover",
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

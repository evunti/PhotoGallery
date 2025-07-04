import { type SchemaTypeDefinition } from "sanity";

const photoAlbumSchema = {
  name: "photoAlbum",
  type: "document",
  title: "Photo Album",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Album Title",
    },
    {
      name: "description",
      type: "text",
      title: "Album Description",
    },
    {
      name: "photos",
      type: "array",
      of: [{ type: "image" }],
      title: "Photos",
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [photoAlbumSchema],
};

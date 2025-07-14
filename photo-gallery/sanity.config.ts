import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import deskStructure from "./src/sanity/deskStructures";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "My Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  schema: {
    types: schema.types,
  },
  plugins: [deskTool({ structure: deskStructure })],
});

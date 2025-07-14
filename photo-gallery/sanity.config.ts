import { defineConfig } from "sanity";
import { deskTool } from "sanity";

export default defineConfig({
  name: "default",
  title: "PhotoGallery",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yourProjectId",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "yourDataset",

  plugins: [deskTool()],
});

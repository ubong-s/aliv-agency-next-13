import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {
  service,
  home,
  about,
  teamMember,
  job,
  project,
  author,
  category,
  post,
  product,
  faq,
} from "@/sanity/schemas";
import { pageStructure, singletonPlugin } from "@/sanity/plugins/settings";
import { productionUrl } from "@/sanity/plugins/productionUrl";
import { previewDocumentNode } from "@/sanity/plugins/previewPane";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "@/sanity/lib/sanity.api";

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  "Next.js Personal Website with Sanity.io";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [about.name, service.name];

const config = defineConfig({
  basePath: "/admin",
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    types: [
      // Singletons
      home,
      about,
      // Documents
      product,
      post,
      project,
      job,
      service,
      faq,
      teamMember,
      category,
      author,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, about]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([about.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

export default config;

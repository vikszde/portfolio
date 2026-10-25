// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // The GitHub Pages workflow passes the published origin and base path
  // (e.g. "/portfolio" for a project site). Locally both stay unset.
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || "/",
});

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  integrations: [
    expressiveCode({
      // Example: Change the theme to "dracula"
      theme: "dracula",
    }),
    mdx(),
    sitemap(),
  ],
});

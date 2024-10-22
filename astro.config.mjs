import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { pluginLanguageBadge } from "./plugins/expressiveCode";

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
      theme: "dracula",
      plugins: [pluginLanguageBadge()],
    }),
    mdx(),
    sitemap(),
  ],
});

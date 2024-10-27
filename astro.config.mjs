import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { pluginLanguageBadge } from "./plugins/expressiveCode";
import { loadEnv } from "vite";

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

if (!PUBLIC_SITE_URL) {
  throw new Error("PUBLIC_SITE_URL is not set in your environment variables file '.env'");
}

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL,
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

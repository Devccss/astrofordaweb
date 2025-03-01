import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://fordawebblog.com",
  integrations: [mdx(), sitemap()],
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],

  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
  },
});
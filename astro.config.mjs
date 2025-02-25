import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';



import node from '@astrojs/node';



// https://astro.build/config
export default defineConfig({
  site: 'https://devccss.github.io',
  base: '/src',
  prefetch: {
    defaultStrategy: 'viewport'
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],

  adapter: node({
    mode: 'standalone'
  })
});
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    icon(),
    sitemap({
      changefreq: 'weekly',   // prayer times update regularly
      priority: 1.0,          // single-page site — everything is top priority
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,        // bind to 0.0.0.0 so the container port is reachable
      watch: {
        usePolling: true, // required on Windows/Mac Docker: native FS events don't cross the bind mount
        interval: 500,
      },
    },
  },
  output: 'static',
  site: 'https://mosquee-vallauris.fr',
  base: '/',
});

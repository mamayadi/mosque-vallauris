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
  },
  output: 'static',
  site: 'https://mosquee-vallauris.fr',
  base: '/',
});

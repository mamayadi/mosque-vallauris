import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://mosquee-vallauris.fr',
  base: '/',
});

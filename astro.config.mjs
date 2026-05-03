import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://mosquee-vallauris.fr',
  base: '/',
});

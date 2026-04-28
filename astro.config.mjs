import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update site + base to match your GitHub username and repo name
// e.g. site: 'https://mon-username.github.io', base: '/mosque-vallauris'
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://mamayadi.github.io',
  base: '/mosque-vallauris',
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update site + base to match your GitHub username and repo name
// e.g. site: 'https://mon-username.github.io', base: '/mosque-vallauris'
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  site: 'https://votre-username.github.io',
  base: '/mosque-vallauris',
});

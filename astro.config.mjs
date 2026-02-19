// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://ramyg.vercel.app',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll use custom global.css
    }),
  ],
});

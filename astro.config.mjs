// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// GitHub Pages: https://aliceng04.github.io/Alices-Portfolio
// With a custom domain later, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://aliceng04.github.io',
  base: '/Alices-Portfolio',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx()]
});

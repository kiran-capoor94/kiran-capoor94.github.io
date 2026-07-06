import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kiran-capoor94.github.io',
  integrations: [mdx(), sitemap()],
});

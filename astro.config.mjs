// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // corrected site domain (was a typo: "intepouchett.com")
  site: "https://inthepouchett.com",
  base: "",
  trailingSlash: 'always',
  integrations: [sitemap()],
});

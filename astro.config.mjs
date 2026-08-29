// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://victor-qin.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],

  // Old Jekyll URLs -> new slugs. Emitted as static meta-refresh pages.
  redirects: {
    '/technical/2020-08-06-Decentralized-Robotics/': '/technical/decentralized-robotics/',
    '/technical/2022-06-17-UTM Protocol/': '/technical/utm-protocol/',
    '/work/2020-05-18-Recycling/': '/work/recycling/',
    '/work/2020-08-11-HUGE/': '/work/huge-guide/',
    '/work/2020-08-12-Ivy/': '/work/ivyhacks/',
  },
});

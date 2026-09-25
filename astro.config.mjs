// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://victor-qin.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],

  // The old Jekyll project/work pages are retired; point everything that used to
  // live under them at the research page. Emitted as static meta-refresh pages.
  redirects: {
    '/projects/': '/research/',
    '/work/': '/research/',
    '/technical/2020-08-06-Decentralized-Robotics/': '/research/',
    '/technical/2022-06-17-UTM Protocol/': '/research/',
    '/work/2020-05-18-Recycling/': '/research/',
    '/work/2020-08-11-HUGE/': '/research/',
    '/work/2020-08-12-Ivy/': '/research/',
  },
});

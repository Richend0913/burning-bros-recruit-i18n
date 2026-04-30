// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://richend0913.github.io',
  base: '/burning-bros-recruit-i18n',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'ne', 'id'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

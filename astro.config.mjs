// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'ne', 'id', 'ja-easy'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[ext]/[hash][extname]',
        },
      },
    },
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});

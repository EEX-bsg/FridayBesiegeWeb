import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://EEX-bsg.github.io',
  base: '/FridayBesiegeWeb',
  output: 'static',
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
});

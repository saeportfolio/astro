import { defineConfig } from 'astro/config';

export default defineConfig({
  trailingSlash: 'ignore',
  output: "sever",
  adapter: vercel(),
});
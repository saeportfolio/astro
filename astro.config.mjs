import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/server'; // ← vercel adapter をインポート

export default defineConfig({
  output: 'server',
  adapter: vercel(),
});
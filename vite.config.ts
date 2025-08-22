import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { htmlMinifierPlugin } from './plugins/html-minify';

export default defineConfig({
  plugins: [
    tailwindcss(),
    htmlMinifierPlugin(),
  ],
  build:{
    minify: 'terser',
  }
})
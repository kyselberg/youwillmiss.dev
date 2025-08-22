import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { cssInline } from './plugins/css-inline';
import { htmlMinifierPlugin } from './plugins/html-minify';

export default defineConfig({
  plugins: [
    tailwindcss(),
    cssInline(),
    htmlMinifierPlugin(),
  ],
  build:{
    minify: 'terser',
    cssCodeSplit: false,
  }
})
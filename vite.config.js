// vite.config.js
import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: '.', // бо index.html в корені
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: glob.sync('./**/*.html'), // index.html + всі HTML в src/
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./**/*.html']),
  ],
});


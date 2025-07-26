
import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';


export default defineConfig({
  root: '.', 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: glob.sync('./**/*.html'), 
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./**/*.html']),
    // 
    createSvgSpritePlugin({
      exportType: 'vanilla', 
      include: '**/icons/*.svg'
    }),
  ],
});




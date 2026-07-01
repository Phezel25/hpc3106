import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        chapter2: resolve(__dirname, 'chapter2.html'),
        chapter3: resolve(__dirname, 'chapter3.html'),
        chapter4: resolve(__dirname, 'chapter4.html'),
        chapter5: resolve(__dirname, 'chapter5.html'),
        chapter6: resolve(__dirname, 'chapter6.html'),
        chapter7: resolve(__dirname, 'chapter7.html'),
        chapter8: resolve(__dirname, 'chapter8.html'),
        chapter9: resolve(__dirname, 'chapter9.html'),
        chapter10: resolve(__dirname, 'chapter10.html'),
        chapter11: resolve(__dirname, 'chapter11.html'),
        chapter12: resolve(__dirname, 'chapter12.html'),
      }
    }
  }
});
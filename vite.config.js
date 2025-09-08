import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  plugins: [
    tailwindcss(),
    ViteMinifyPlugin(),
  ],
});

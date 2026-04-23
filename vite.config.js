import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  base: './',  // Relative paths for all assets
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        competitions: './competitions.html',
        stats: './stats.html',
        media: './media.html',
        notfound: './404.html'
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          } else if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Ensure CSS and JS are properly handled
    cssCodeSplit: true,
    minify: 'terser',
  },
  server: {
    middlewareMode: false,
  },
  plugins: [
    tailwindcss(),
    ViteMinifyPlugin(),
  ],
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    strictPort: true
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __WS_TOKEN__: JSON.stringify(process.env.WS_TOKEN || "development"),
  },
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-*'],
          'utils-vendor': ['@tanstack/react-query', 'zod', 'class-variance-authority'],
        },
      },
    },
    // Enable minification
    minify: 'terser',
    // Enable source maps for production debugging
    sourcemap: true,
    // Optimize chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Enable CSS code splitting
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  // Optimize asset handling
  assetsInclude: ['**/*.glb', '**/*.gltf'],
});

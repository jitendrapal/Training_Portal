import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // SEO and Performance Optimizations
  build: {
    // Enable minification
    minify: "esbuild",

    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },

    // Enable source maps for production debugging
    sourcemap: true,

    // Optimize assets
    assetsInlineLimit: 4096,

    // Enable CSS code splitting
    cssCodeSplit: true,
  },

  // Server configuration for development
  server: {
    // Enable compression
    compress: true,

    // CORS configuration
    cors: true,

    // Headers for security and performance
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },

  // Preview server configuration
  preview: {
    port: 4173,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
    },
  },
});

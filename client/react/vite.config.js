// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add this 'server' block:
  server: {
    // Whenever a request starts with '/api', Vite will forward it to the target
    proxy: {
      '/api': {
        // The URL of your running backend server (port 5000)
        target: 'http://localhost:5000', 
        // Important for host-based routing
        changeOrigin: true, 
        // Optional: Rewrites the path if necessary, but often not needed
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      },
    },
  },
});
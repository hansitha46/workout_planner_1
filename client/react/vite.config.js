
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // The URL of your running backend server (port 5000)
        target: 'http://localhost:5000', 
        changeOrigin: true, 
      },
    },
  },
});
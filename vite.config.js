import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Bender ARS website.
// See https://vitejs.dev/config/ for details.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    open: true
  }
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for assets
  build: {
    rollupOptions: {
      external: [], // Keep as is unless specific exclusions are required
    },
  },
});


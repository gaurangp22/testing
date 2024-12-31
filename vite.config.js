export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures assets resolve from root during build
  build: {
    rollupOptions: {
      input: '/index.html', // Your entry point
    },
  },
  server: {
    historyApiFallback: true, // Handles React Router paths during development
  },
});
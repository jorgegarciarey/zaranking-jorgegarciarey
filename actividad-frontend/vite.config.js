import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ["config/setup.js"],
    coverage: {
      exclude: [
        'mocks/*',
      ],
    }
  },
  server: {
    host: "0.0.0.0",
    open: false
  },
})

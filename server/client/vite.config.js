import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this matches the `distDir` in vercel.json
  },
  base: "/",
  server: {
    proxy: {
      "/": {
        target: "https://travel-project-pi.vercel.app",
      },
    },
  },
});
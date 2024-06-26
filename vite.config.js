import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@galleryImages": path.resolve(__dirname, "./src/galleryImages"),
      "@transition": path.resolve(__dirname, "./src/transition"),
    },
  },
});

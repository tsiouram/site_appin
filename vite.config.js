import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/site_appin/',
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});

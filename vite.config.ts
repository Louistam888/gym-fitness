import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; //from types.node that was installed

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});

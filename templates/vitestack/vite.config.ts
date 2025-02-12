import { defineConfig } from "vite";
import { fileURLToPath } from "node:url"; // ✅ Use "node:" prefix
import path from "node:path"; // ✅ Use "node:" prefix
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [TanStackRouterVite({ autoCodeSplitting: true }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

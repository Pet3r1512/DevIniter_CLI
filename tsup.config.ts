import { defineConfig } from "tsup";

export default defineConfig({
  entry: { cli: "src/index.ts" },
  outDir: "dist",
  format: ["esm"],
  sourcemap: true,
  clean: true,
  shims: true,
});

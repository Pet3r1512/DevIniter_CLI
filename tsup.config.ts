import { defineConfig } from "tsup";
import dotenv from "dotenv";

export default defineConfig({
  entry: ["src/index.ts"],
  env: dotenv.config().parsed,
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  shims: true,
});

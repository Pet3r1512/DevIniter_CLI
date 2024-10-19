import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDirectory = path.join(__dirname, "../templates");

export function scanTemplates(): string[] {
  const templates = fs
    .readdirSync(path.join(__dirname, "../templates"))
    .filter((file) => {
      const filePath = path.join(templateDirectory, file);
      return fs.statSync(filePath).isDirectory();
    });
  return templates;
}

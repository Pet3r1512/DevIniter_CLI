import fs from "node:fs";
import path from "node:path";
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

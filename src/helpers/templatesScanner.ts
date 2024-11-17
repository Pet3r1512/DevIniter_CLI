import fs from "node:fs";
import path from "node:path";

const templateDirectory = path.join(__dirname, "../../templates");

export function scanTemplates(): string[] {
  try {
    const templates = fs.readdirSync(templateDirectory).filter((file) => {
      const filePath = path.join(templateDirectory, file);
      return fs.statSync(filePath).isDirectory();
    });
    return templates;
  } catch (error) {
    return [];
  }
}

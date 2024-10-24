import fs from "node:fs";
import path from "node:path";
import { templateDirectory } from "./index";

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

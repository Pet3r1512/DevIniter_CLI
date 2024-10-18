import fs from "fs";
import path from "path";
import { templateDirectory } from "./index.js";

export default function getTemplates(): string[] {
  const templates = fs.readdirSync(templateDirectory).filter((file) => {
    const filePath = path.join(templateDirectory, file);
    return fs.statSync(filePath).isDirectory();
  });
  return templates;
}

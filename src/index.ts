#!/usr/bin/env node

import inquirer from "inquirer";
import path from "node:path";
import fs from "fs-extra";
import { execaCommandSync } from "execa";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDirectory = path.join(__dirname, "../templates");

export async function init() {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: `What is your project's name: `,
      },
      {
        type: "list",
        name: "template",
        message: "Choose a template: ",
        choices: ["Nextjs", "Vite"],
      },
    ]);

    if (!answers) {
      throw new Error("No answers received from inquirer prompt.");
    }

    const { projectName, template } = answers;
    const projectPath = path.join(process.cwd(), projectName);
    const templatePath = path.join(templateDirectory, template.toLowerCase());

    console.log(`Project path: ${projectPath}`);
    console.log(`Template path: ${templatePath}`);

    fs.copySync(templatePath, projectPath);

    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = fs.readJsonSync(packageJsonPath);
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    console.log("These packages will be installed:");
    console.log("Dependencies:", Object.keys(dependencies).join(", "));
    console.log("DevDependencies:", Object.keys(devDependencies).join(", "));

    execaCommandSync("npm install", { cwd: projectPath, stdio: "inherit" });

    console.log(
      `Project ${projectName} created successfully using ${template} template 🚀.`
    );
  } catch (error) {
    console.error("Error during initialization: ", error);
  }
}

init();

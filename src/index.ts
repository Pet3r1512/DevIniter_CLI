#!/usr/bin/env node

const inquirer = require("inquirer");
import path from "node:path";
import { scanTemplates } from "./scan_templates.js";
import { checkAllowToInstall } from "./check_allow_to_install.js";
import fs from "fs-extra";

const DEFAULT_TEMPLATES = ["nextjs", "vite"];
export const templateDirectory = path.join(__dirname, "../templates");

async function detectPackageManager() {
  const pnpmInPath =
    process.env._?.includes("pnpx") ||
    process.argv.some((arg) => arg.includes("pnpx"));
  return pnpmInPath ? "pnpm" : "npm";
}

export async function scaffoldTemplate(projectName: string, template: string) {
  const { default: ora } = await import("ora");

  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(templateDirectory, template);
  const packageJsonPath = path.join(projectPath, "package.json");

  const spinner = ora("Installing template...").start();

  try {
    // Copy template files to the project path
    fs.copySync(templatePath, projectPath);

    // Read and update package.json name
    const packageJson = fs.readJsonSync(packageJsonPath); // Read package.json
    packageJson.name = projectName; // Update the name field
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 }); // Write updated JSON back to package.json

    // Detect package manager and run install command
    const packageManager = await detectPackageManager();

    spinner.succeed(
      `Project ${projectName} created successfully using ${template} template 🚀.`
    );

    spinner.info("Now, you can: ");
    spinner.info("cd " + projectName);
    spinner.info(packageManager + " install");
  } catch (error) {
    spinner.fail("Failed to install template.");
    console.error((error as Error).message);
    throw error;
  }

  return true;
}

export async function init() {
  try {
    const templates =
      scanTemplates().length > 0 ? scanTemplates() : DEFAULT_TEMPLATES;
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
        choices: templates,
      },
    ]);

    if (!answers) {
      throw new Error("No answers received from inquirer prompt.");
    }

    const { projectName, template } = answers;
    const isAllowToInstall = await checkAllowToInstall(answers);

    if (!isAllowToInstall) {
      throw new Error("Directory is not empty.");
    }

    scaffoldTemplate(projectName, template.toLowerCase());
  } catch (error) {
    console.error("Error during initialization: ", (error as Error).message);
    throw error;
  }
}

init().catch((error) => {
  console.error("Error: ", (error as Error).message);
  process.exit(1);
});

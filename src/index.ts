#!/usr/bin/env node

const inquirer = require("inquirer");
import path from "node:path";
import { scanTemplates } from "./scan_templates.js";
import { checkAllowToInstall } from "./check_allow_to_install.js";
import fs from "fs-extra";
const spawn = require("cross-spawn");

const DEFAULT_TEMPLATES = ["nextjs", "vite"];
export const templateDirectory = path.join(__dirname, "../templates");

async function detectPackageManager() {
  const pnpmInPath =
    process.env._?.includes("pnpx") ||
    process.argv.some((arg) => arg.includes("pnpx"));
  return pnpmInPath ? "pnpm" : "npm";
}

export async function scaffoldTemplate(projectName: string, template: string) {
  const ora = (await import("ora")).default;

  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(templateDirectory, template);

  const spinner = ora("Installing template...").start();

  try {
    fs.copySync(templatePath, projectPath);

    // Detect package manager and run install command
    const packageManager = await detectPackageManager();
    const installCommand =
      packageManager === "npm"
        ? ["install", "--legacy-peer-deps"]
        : ["install"];

    const result = spawn.sync(packageManager, installCommand, {
      cwd: projectPath,
      stdio: "inherit",
    });

    if (result.error) {
      throw result.error;
    }

    spinner.succeed(
      `Project ${projectName} created successfully using ${template} template 🚀.`
    );
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

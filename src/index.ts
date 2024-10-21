#!/usr/bin/env node

import inquirer from "inquirer";
import path from "node:path";
import fs from "fs-extra";
import { execaCommandSync } from "execa";
import { fileURLToPath } from "node:url";
import { scanTemplates } from "./scan_templates.js";
import ora from "ora";

const DEFAULT_TEMPLATES = ["nextjs", "vite"];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const templateDirectory = path.join(__dirname, "../templates");

export function scaffoldTemplate(projectName: string, template: string) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(templateDirectory, template);

  const spinner = ora("Installing template...").start();

  try {
    fs.copySync(templatePath, projectPath);

    execaCommandSync("pnpm install", { cwd: projectPath, stdio: "inherit" });

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

export async function checkAllowToInstall(answers: {
  projectName: string;
  template: string;
}): Promise<boolean> {
  const projectPath = path.join(process.cwd(), answers.projectName);

  if (!fs.existsSync(projectPath) || fs.readdirSync(projectPath).length === 0) {
    return true;
  }

  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: `The directory ${answers.projectName} is not empty. What would you like to do?`,
      choices: [
        { name: "Remove all existing files and continue", value: "remove" },
        { name: "Cancel installation", value: "cancel" },
        { name: "Ignore files and continue", value: "ignore" },
      ],
    },
  ]);

  if (action === "cancel") {
    console.log("Installation cancelled.");
    return false;
  }

  if (action === "remove") {
    fs.emptyDirSync(projectPath);
  }

  return true;
}

export async function init() {
  try {
    // In case templates can not be scanned automactically, we can provide a default list of templates
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

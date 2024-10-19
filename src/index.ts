#!/usr/bin/env node

import inquirer from "inquirer";
import path from "node:path";
import fs from "fs-extra";
import { execaCommandSync } from "execa";
import { fileURLToPath } from "node:url";
import { scanTemplates } from "./scan_templates.js";
import ora from "ora";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const templateDirectory = path.join(__dirname, "../templates");

export function scaffoldTemplate(projectName: string, template: string) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(templateDirectory, template);

  const spinner = ora("Installing template...").start();

  try {
    fs.copySync(templatePath, projectPath);

    execaCommandSync("npm install", { cwd: projectPath, stdio: "inherit" });

    spinner.succeed(
      `Project ${projectName} created successfully using ${template} template 🚀.`
    );
  } catch (error) {
    spinner.fail("Failed to install template.");
    console.error(error);
  }

  return true;
}

export async function init() {
  try {
    const templates = scanTemplates();
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

    scaffoldTemplate(answers.projectName, answers.template.toLowerCase());
  } catch (error) {
    console.error("Error during initialization: ", error);
  }
}

init();

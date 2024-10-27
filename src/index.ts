#!/usr/bin/env node

const inquirer = require("inquirer");
import path from "node:path";
import { scanTemplates } from "./scan_templates.js";
import { checkAllowToInstall } from "./check_allow_to_install.js";
import fs from "fs-extra";

const DEFAULT_TEMPLATES = ["nextjs", "vite"];
export const templateDirectory = path.resolve(__dirname, "../templates");

export async function scaffoldTemplate(projectName: string, template: string) {
  const { default: ora } = await import("ora");

  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(templateDirectory, template);
  const packageJsonPath = path.join(projectPath, "package.json");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template ${template} does not exist.`);
  }

  const spinner = ora("Installing template...").start();

  try {
    fs.copySync(templatePath, projectPath);

    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = projectName;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

    spinner.succeed(
      `Project ${projectName} created successfully using ${template} template 🚀.\n`
    );

    spinner.info("Now, run: \n");
    spinner.info("cd " + projectName + "\n");
    spinner.info(
      "Then, check for dependencies installation here: https://deviniter.vercel.app/docs/installation#installing-projects-dependencies"
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

    await scaffoldTemplate(projectName, template.toLowerCase());
  } catch (error) {
    console.error("Error during initialization: ", (error as Error).message);
    throw error;
  }
}

init().catch((error) => {
  console.error("Error: ", (error as Error).message);
  process.exit(1);
});

#!/usr/bin/env node

import inquirer from "inquirer";
import path from "node:path";
import { scanTemplates } from "./helpers/templatesScanner.js";
import { checkAllowToInstall } from "./helpers/checkAllowToInstall.js";
import {
  ScaffoldOptions,
  scaffoldTemplate,
} from "./helpers/scaffoldTemplate.js";

const DEFAULT_TEMPLATES = ["nextjs", "vite", "vitestack"];
export const templateDirectory = path.resolve(__dirname, "../templates");

let scaffoldOptions: ScaffoldOptions = {
  prisma: false,
};

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

    if (answers.template === "nextjs") {
      const answer = await inquirer.prompt([
        {
          type: "confirm",
          name: "prisma",
          message: "Would you prefer to install Prisma? ",
          default: true,
        },
      ]);
      scaffoldOptions.prisma = answer.prisma;
    }
    const { projectName, template } = answers;
    const isAllowToInstall = await checkAllowToInstall(answers);

    if (!isAllowToInstall) {
      throw new Error("Directory is not empty.");
    }

    await scaffoldTemplate(
      projectName,
      template.toLowerCase(),
      scaffoldOptions
    );
  } catch (error) {
    console.error("Error during initialization: ", (error as Error).message);
    throw error;
  }
}

init().catch((error) => {
  console.error("Error: ", (error as Error).message);
  process.exit(1);
});

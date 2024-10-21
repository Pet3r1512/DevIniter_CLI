import inquirer from "inquirer";
import path from "node:path";
import fs from "fs-extra";

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

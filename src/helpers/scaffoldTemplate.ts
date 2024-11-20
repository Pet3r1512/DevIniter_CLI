import fs from "fs-extra";
import ora from "ora";
import path from "path";
import { templateDirectory } from "..";
import { installDependencies } from "./dependenciesInstaller";
import prismaInstaller from "../installers/nextjs/prisma";

export type ScaffoldOptions = {
  prisma: boolean;
};

export async function scaffoldTemplate(
  projectName: string,
  template: string,
  scaffoldOptions?: ScaffoldOptions
) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(templateDirectory, template);
  const packageJsonPath = path.join(projectPath, "package.json");

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template ${template} does not exist.`);
  }

  const spinner = ora("Scaffolding template...").start();

  try {
    fs.copySync(templatePath, projectPath);

    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = projectName;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });

    spinner.succeed(
      `Project ${projectName} created successfully using ${template} template 🚀.\n`
    );

    if (scaffoldOptions?.prisma === true) {
      await prismaInstaller(packageJsonPath);
    }

    spinner.start();
    await installDependencies(
      spinner,
      projectPath,
      projectName,
      { silent: true },
      scaffoldOptions
    );
  } catch (error) {
    spinner.fail(" Failed to install template.");
    console.error((error as Error).message);
    throw error;
  }

  return true;
}

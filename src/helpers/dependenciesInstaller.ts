import { execa } from "execa";
import fs from "fs";
import path from "path";
import { getPackageManager } from "./getPackageManager";
import { Ora } from "ora";
import { ScaffoldOptions } from "./scaffoldTemplate";
import { prismaIniter } from "../installers/nextjs/prisma";
/**
 * Function to install dependencies using the specified package manager.
 * @param spinner - Ora spinner for status updates.
 * @param projectPath - The path where dependencies should be installed.
 * @param projectName - The project name for user instructions.
 * @param options - Additional options for installation.
 */
export async function installDependencies(
  spinner: Ora,
  projectPath: string,
  projectName: string,
  options?: any,
  tools?: ScaffoldOptions
): Promise<void | boolean> {
  const packageManager = getPackageManager();

  // Ensure the directory exists
  if (!fs.existsSync(projectPath)) {
    spinner.fail("Invalid project path");
    return;
  }

  // Change to the project directory
  try {
    process.chdir(projectPath);
  } catch (err) {
    spinner.fail("Failed to change directory");
    return;
  }

  // Optional check for package.json
  if (!tools && !fs.existsSync(path.join(projectPath, "package.json"))) {
    spinner.fail("No package.json found in the project path.");
    console.log(
      "You can report this failure at: https://github.com/Pet3r1512/DevIniter_CLI/issues/new?template=bug-report---.md"
    );
    return;
  }

  spinner.start(`📦 Installing dependencies using ${packageManager}...`);
  const installCommand = {
    npm: ["install"],
    pnpm: ["install"],
    yarn: ["install"]
  }[packageManager];

  try {
    await execa(packageManager, installCommand, {
      cwd: projectPath,
      stdio: "inherit",
      options: options,
      env: process.env,
    });
    spinner.succeed("Dependencies installed successfully!\n");

    if (tools?.prisma === true) {
      await prismaIniter(spinner, projectPath, packageManager);
    }

    spinner.info(`Now, cd ${projectName}\n`);
    spinner.info(`${packageManager} run dev\n`);
    spinner.succeed("Happy coding!");
  } catch (error: any) {
    spinner.fail(`Failed to install dependencies. ${error}`);
    console.log(
      "You can report this failure at: https://github.com/Pet3r1512/DevIniter_CLI/issues/new?template=bug-report---.md"
    );
  }
}

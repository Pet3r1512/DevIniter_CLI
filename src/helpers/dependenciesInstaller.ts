import { execa } from "execa";
import fs from "fs";
import path from "path";
import { getPackageManager } from "./getPackageManager";
import { Ora } from "ora";

/**
 * Function to install dependencies using the specified package manager.
 * @param packageManager - The user's chosen package manager.
 * @param projectPath - The path where dependencies should be installed.
 */
export async function installDependencies(
  spinner: Ora,
  projectPath: string,
  projectName: string,
  options: { silent: boolean }
): Promise<void> {
  const packageManager = getPackageManager();

  // Ensure the directory exists
  if (!fs.existsSync(projectPath)) {
    spinner.fail("Invalid project path");
  }

  // Change to the project directory
  try {
    process.chdir(projectPath);
  } catch (err) {
    spinner.fail("Fail to change directory");
  }

  // Check if package.json exists
  if (!fs.existsSync(path.join(projectPath, "package.json"))) {
    spinner.fail("Failed to install dependencies");
    console.log(
      "You can report this fail at: https://github.com/Pet3r1512/DevIniter_CLI/issues/new?template=bug-report---.md"
    );
  }

  spinner.start(`📦 Installing dependencies using ${packageManager}...`);
  const installCommand = {
    npm: ["install", "--legacy-peer-deps"],
    pnpm: ["install", "--no-strict-peer-dependencies"],
  }[packageManager];

  try {
    await execa(packageManager, installCommand, {
      cwd: projectPath,
      options: options,
      stdio: "pipe",
      env: process.env,
    });
    spinner.succeed("Dependencies installed successfully!\n");
    spinner.info(`Now, cd ${projectName}\n`);
    spinner.info(`${packageManager} run dev\n`);
    spinner.succeed("Happy coding!");
  } catch (error: any) {
    spinner.fail("Failed to install dependencies");
    console.log(
      "You can report this fail at: https://github.com/Pet3r1512/DevIniter_CLI/issues/new?template=bug-report---.md"
    );
  }
}

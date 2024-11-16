import { execa } from "execa";
import fs from "fs";
import path from "path";
import { getPackageManager } from "./helpers/getPackageManager";
import { Ora } from "ora";

/**
 * Function to install dependencies using the specified package manager.
 * @param packageManager - The user's chosen package manager.
 * @param projectPath - The path where dependencies should be installed.
 */
export async function installDependencies(
  spinner: Ora,
  projectPath: string,
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
    spinner.succeed("Directory is changed");
  } catch (err) {
    spinner.fail("Fail to change directory");
  }

  // Check if package.json exists
  if (!fs.existsSync(path.join(projectPath, "package.json"))) {
    spinner.fail("Failed to install dependencies");
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
    spinner.succeed("Dependencies installed successfully!");
    spinner.text = "Happy coding!";
  } catch (error: any) {
    spinner.fail("Failed to install dependencies");
  }
}

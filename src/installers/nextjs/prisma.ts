import fs from "fs-extra";
import { Ora } from "ora";
import { execa } from "execa";

export default async function prismaInstaller(packageJsonPath: string) {
  try {
    // Read and parse the existing package.json
    const packageJsonContent = await fs.readFile(packageJsonPath, "utf-8");
    const packageJson = JSON.parse(packageJsonContent);

    // Add Prisma dependencies
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      prisma: "^5.22.0",
    };

    packageJson.dependencies = {
      ...packageJson.dependencies,
      "@prisma/client": "^5.22.0",
    };

    // Write back the updated package.json
    await fs.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      "utf-8"
    );

    return true;
  } catch (error: any) {
    console.error(`Failed to update package.json: ${error.message}`);
    return false;
  }
}

export async function prismaIniter(
  spinner: Ora,
  projectPath: string,
  packageManager: string
) {
  spinner.start("Initializing Prisma...");
  const prismaInit = {
    npm: ["npx", "prisma", "init"],
    pnpm: ["pnpm", "dlx", "prisma", "init"],
  }[packageManager];

  try {
    const [command, ...args] = prismaInit || [];
    if (!command) {
      throw new Error(
        "Invalid package manager or missing Prisma initialization command."
      );
    }

    await execa(command, args, {
      cwd: projectPath,
    });

    spinner.succeed("Prisma initialized!\n");
  } catch (error) {
    spinner.fail(`Failed to initialize Prisma: ${(error as Error).message}`);
    return false;
  }
}

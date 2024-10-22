import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import fs from "fs-extra";
import path from "node:path";
import { checkAllowToInstall } from "../src/check_allow_to_install";
import inquirer from "inquirer";

const TEST_TEMPLATE = "Nextjs";
const promptSpy = vi.spyOn(inquirer, "prompt");

describe("non-empty directory handler", () => {
  let projectPath: string = "";

  beforeEach(() => {
    const workerId = process.env.VITEST_WORKER_ID || "0";
    const projectName = `testProject_${workerId}`;

    projectPath = path.join(process.cwd(), projectName);

    fs.ensureDirSync(projectPath);
    fs.writeFileSync(path.join(projectPath, "somefile.txt"), "");
  });

  afterEach(() => {
    fs.removeSync(projectPath);
  });

  it("should return true if the chosen directory is not empty", async () => {
    fs.emptyDirSync(projectPath);
    const result = await checkAllowToInstall({
      projectName: path.basename(projectPath),
      template: TEST_TEMPLATE,
    });
    expect(result).toBe(true);
  });

  it("should return true and remove all files if user choose to remove all existing files", async () => {
    promptSpy.mockResolvedValueOnce({ action: "remove" });

    const result = await checkAllowToInstall({
      projectName: path.basename(projectPath),
      template: TEST_TEMPLATE,
    });

    expect(fs.readdirSync(projectPath).length).toBe(0);
    expect(result).toBe(true);
  });

  it("shour return false if user choose to cancel installation process", async () => {
    promptSpy.mockResolvedValueOnce({
      action: "cancel",
    });

    const result = await checkAllowToInstall({
      projectName: path.basename(projectPath),
      template: TEST_TEMPLATE,
    });

    expect(result).toBe(false);
  });

  it("should return true if the user chooses to ignore files and continue", async () => {
    promptSpy.mockResolvedValueOnce({
      action: "ignore",
    });

    const result = await checkAllowToInstall({
      projectName: path.basename(projectPath),
      template: TEST_TEMPLATE,
    });

    expect(result).toBe(true);
  });
});

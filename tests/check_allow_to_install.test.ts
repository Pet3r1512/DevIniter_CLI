import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import fs from "fs-extra";
import path from "node:path";
import { checkAllowToInstall } from "../src/check_allow_to_install";
import inquirer from "inquirer";

const projectName = "testProject";
const template = "Nextjs";
const generatePath = path.join(__dirname, projectName);
const projectPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "../templates", template);

describe("non-empty directory handler", () => {
  beforeEach(() => {
    fs.ensureDirSync(projectPath);
    fs.writeFileSync(path.join(projectPath, "somefile.txt"), "");
  });

  afterEach(() => {
    fs.removeSync(projectPath);
  });

  it("should return true if the chosen directory is not empty", async () => {
    fs.emptyDirSync(projectPath);
    const result = await checkAllowToInstall({
      projectName: projectName,
      template: "nextjs",
    });
    expect(result).toBe(true);
  });

  it("should return true and remove all files if user choose to remove all existing files", async () => {
    vi.spyOn(inquirer, "prompt").mockResolvedValue({ action: "remove" });

    const result = await checkAllowToInstall({
      projectName: projectName,
      template: "nextjs",
    });

    expect(fs.readdirSync(projectPath).length).toBe(0);
    expect(result).toBe(true);
  });

  it("shour return false if user choose to cancel installation process", async () => {
    vi.spyOn(inquirer, "prompt").mockResolvedValue({
      action: "cancel",
    });

    const result = await checkAllowToInstall({
      projectName: projectName,
      template: "nextjs",
    });

    expect(result).toBe(false);
  });

  it("should return true if the user chooses to ignore files and continue", async () => {
    vi.spyOn(inquirer, "prompt").mockResolvedValue({
      action: "ignore",
    });

    const result = await checkAllowToInstall({
      projectName: projectName,
      template: "nextjs",
    });

    expect(result).toBe(true);
  });
});

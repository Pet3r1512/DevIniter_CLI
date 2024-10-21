import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import path from "node:path";
import { execaCommandSync } from "execa";
import fs from "fs-extra";
import { scaffoldTemplate } from "../src/index";

const project_name = "testProject";
const template = "Nextjs";
const generatePath = path.join(__dirname, project_name);
const projectPath = path.join(process.cwd(), project_name);
const templatePath = path.join(__dirname, "../templates", template);

vi.mock("fs-extra");
vi.mock("execa");

describe("CLI behaviors: ", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    if (fs.existsSync(generatePath)) {
      fs.removeSync(generatePath);
    }
  });

  it("should scaffold template and install dependencies", async () => {
    const copySyncMock = vi.mocked(fs.copySync);
    const execaCommandSyncMock = vi.mocked(execaCommandSync);

    const result = scaffoldTemplate(project_name, template);

    expect(copySyncMock).toHaveBeenCalledWith(templatePath, projectPath);
    expect(execaCommandSyncMock).toHaveBeenCalledWith("pnpm install", {
      cwd: projectPath,
      stdio: "inherit",
    });
    expect(result).toBe(true);
  });
});

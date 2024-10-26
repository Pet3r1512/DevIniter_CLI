import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import path from "node:path";
import fs from "fs-extra";
import { scaffoldTemplate } from "../src/index";

const project_name = "testProject";
const template = "nextjs";
const generatePath = path.join(__dirname, project_name);
const projectPath = path.join(process.cwd(), project_name);
const templatePath = path.join(__dirname, "../templates", template);

vi.mock("fs-extra", async () => {
  const actualFs = await vi.importActual<typeof import("fs-extra")>("fs-extra");
  return {
    ...actualFs,
    copySync: vi.fn(),
  };
});

vi.mock("execa", async () => {
  const actualExeca = await vi.importActual<typeof import("execa")>("execa");
  return {
    ...actualExeca,
    execaCommandSync: vi.fn(),
  };
});

describe("CLI behaviors:", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    if (fs.existsSync(generatePath)) {
      fs.removeSync(generatePath);
    }
  });

  it("should scaffold template and install dependencies", async () => {
    const copySyncMock = vi.spyOn(fs, "copySync");
    const execaCommandSyncMock = vi.spyOn(
      await import("execa"),
      "execaCommandSync"
    );

    const result = await scaffoldTemplate(project_name, template);

    expect(copySyncMock).toHaveBeenCalledWith(templatePath, projectPath);
    expect(execaCommandSyncMock).toHaveBeenCalledWith(
      "npm install --legacy-peer-deps",
      {
        cwd: projectPath,
        stdio: "inherit",
      }
    );
    expect(result).toBe(true);
  });
});

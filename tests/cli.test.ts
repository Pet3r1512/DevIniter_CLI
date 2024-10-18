import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import path from "node:path";
import { execaCommandSync } from "execa";
import fs from "fs-extra";
import { scaffoldTemplate } from "../dist/index.js";

const project_name = "test-project";
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
    const packageJson = {
      dependencies: {
        react: "^17.0.0",
      },
      devDependencies: {
        typescript: "^4.0.0",
      },
    };

    const copySyncMock = vi.mocked(fs.copySync);
    const readJsonSyncMock = vi
      .mocked(fs.readJsonSync)
      .mockReturnValue(packageJson);
    const execaCommandSyncMock = vi.mocked(execaCommandSync);

    const result = scaffoldTemplate(project_name, template);

    expect(copySyncMock.mockImplementation(() => {})).toHaveBeenCalledWith(
      templatePath,
      projectPath
    );
    expect(readJsonSyncMock).toHaveBeenCalledWith(
      path.join(projectPath, "package.json")
    );
    expect(execaCommandSyncMock).toHaveBeenCalledWith("npm install", {
      cwd: projectPath,
      stdio: "inherit",
    });
    expect(result).toBe(true);
  });
});

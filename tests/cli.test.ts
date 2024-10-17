import { describe, expect, it } from "vitest";
import path from "node:path";
import { execaCommandSync, type SyncOptions, type SyncResult } from "execa";

const CLI_PATH = path.join(__dirname, "../dist/index.js");
const project_name = "test-project";
const generatePath = path.join(__dirname, project_name);

const run = <SO extends SyncOptions>(
  args: string[],
  options?: SO
): SyncResult<SO> => {
  return execaCommandSync(`node ${CLI_PATH} ${args.join(" ")}`, options);
};

describe("CLI behaviors: ", () => {
  it("should ask user about project's name", () => {
    const { stdout } = run([]);
    expect(stdout).toContain(`What is your project's name: `);
  });
});

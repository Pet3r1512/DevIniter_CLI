import { describe, expect, it } from "vitest";
import { scanTemplates } from "../src/scan_templates";

describe("Scan template", () => {
  it("should scan the template directory", () => {
    const existedTemplates = ["nextjs", "vite"];

    expect(scanTemplates()).toEqual(existedTemplates);
  });
});

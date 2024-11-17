import { describe, expect, it } from "vitest";
import { scanTemplates } from "../src/helpers/templatesScanner";

describe("Scan template", () => {
  it("should scan the template directory", () => {
    const existedTemplates = ["nextjs", "vite"];

    expect(scanTemplates()).toEqual(existedTemplates);
  });
});

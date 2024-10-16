import { describe, expect, it } from "vitest";
import { hello } from "../src/index";

describe("Demo test", () => {
  it("should return 'Hello World'", () => {
    expect(hello()).toBe("Hello World");
  });
});

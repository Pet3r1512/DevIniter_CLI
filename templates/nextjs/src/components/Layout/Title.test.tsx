import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title test: ", () => {
  it("should render NextJS Starter Template text", () => {
    render(<Title />);
    const text = screen.getByText("NextJS Starter Template");
    expect(text).toBeInTheDocument();
  });
});

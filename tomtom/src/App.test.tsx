import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Index Page", () => {
  it("should render Hi text", () => {
    render(<App />);
    const starterText = screen.getByText("Starter Template");
    expect(starterText).toBeInTheDocument();
  });
});

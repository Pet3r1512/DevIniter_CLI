import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./app.tsx";

describe("Index Page", () => {
  it("should render Starter Template text", () => {
    render(<App />);
    const starterText = screen.getByText("Starter Template");
    expect(starterText).toBeInTheDocument();
  });
});

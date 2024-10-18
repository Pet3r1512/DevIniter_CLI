import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IndexPage from "./index";

describe("Index Page", () => {
  it("should render Hi text", () => {
    render(<IndexPage />);
    const starterText = screen.getByText("Starter Template");
    expect(starterText).toBeInTheDocument();
  });
});

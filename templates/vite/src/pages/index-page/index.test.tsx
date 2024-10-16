import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import IndexPage from "./index";

describe("Index Page", () => {
  it("should render Hi text", () => {
    render(<IndexPage />);
    const hiText = screen.getByText("Starter Template");
    expect(hiText).toBeInTheDocument();
  });
});

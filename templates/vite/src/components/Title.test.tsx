import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Title from "./Title";

describe("Title test", () => {
  it("should render VITE - REACT.JS - TYPESCRIPT in Title component", () => {
    render(<Title />);
    const title = screen.getByText("VITE - REACT.JS - TYPESCRIPT");
    expect(title).toBeInTheDocument();
  });
});

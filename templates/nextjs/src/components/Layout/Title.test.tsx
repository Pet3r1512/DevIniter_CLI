import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title test: ", () => {
  it("should render NEXT.JS - PAGE ROUTER text", () => {
    render(<Title />);
    const text = screen.getByText("NEXT.JS - PAGE ROUTER");
    expect(text).toBeInTheDocument();
  });
});

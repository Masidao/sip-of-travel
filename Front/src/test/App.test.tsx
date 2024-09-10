import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App 컴포넌트", () => {
  it("hi 텍스트를 보여준다", () => {
    render(<App />);
    expect(screen.getByText("hi")).toBeInTheDocument();
  });
});

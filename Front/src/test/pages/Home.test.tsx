import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../pages/Home";

describe("Home Component", () => {
  it("상단에 환영합니다 메세지가 표시된다", () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/환영합니다!/);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("일정 추가 버튼이 표시된다", () => {
    render(<Home />);
    const addButton = screen.getByText("일정 추가");
    expect(addButton).toBeInTheDocument();
  });
});

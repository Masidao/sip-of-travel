import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../pages/Home";
import schedulesData from "../../../data/schedules.json";

describe("Home Component", () => {
  it("상단에 환영합니다 메세지가 표시된다", () => {
    render(<Home schedules={schedulesData} />);
    const welcomeMessage = screen.getByText(/환영합니다!/);
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("일정 추가 버튼이 표시된다", () => {
    render(<Home schedules={schedulesData} />);
    const addButton = screen.getByText("일정 추가");
    expect(addButton).toBeInTheDocument();
  });

  it("일정이 없는 경우 '일정을 추가해주세요' 메세지가 표시된다", () => {
    render(<Home schedules={[]} />);
    const noScheduleMessage = screen.getByText("일정을 추가해주세요.");
    expect(noScheduleMessage).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Dates from "../../pages/Dates";

vi.mock("react-router-dom", async () => {
  const actual = (await vi.importActual("react-router-dom")) as object;
  return {
    ...actual, // 원본 모듈의 나머지를 그대로 사용
    useNavigate: () => vi.fn(), // useNavigate만 모킹
  };
});

describe("Dates Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Dates />
      </MemoryRouter>
    );
  });

  it("초기 렌더링 확인", () => {
    expect(screen.getByText("여행 일정 등록")).toBeInTheDocument();
    expect(
      screen.getByText("각 날짜별 계획하신 여행 일정을 안내해 드립니다.")
    ).toBeInTheDocument();

    const button = screen.getByRole("button");
    
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent("일정을 선택해주세요");
  });

  it("날짜 클릭 후 버튼 활성화", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();

    const dayElements = screen.getAllByText("1");

    fireEvent.click(dayElements[0]); // 첫 번째 '1'을 클릭

    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent("선택 완료");
  });
});

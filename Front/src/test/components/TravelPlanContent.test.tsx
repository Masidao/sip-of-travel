import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import scheduleList from "../../../data/scheduleList.json";
import TravelPlanContent from "../../components/travelPlan/TravelPlanContent";

beforeAll(() => {
  global.window.kakao = {
    maps: {
      LatLng: vi.fn(),
      Map: vi.fn(),
    },
  };
});

const mockNavigate = vi.fn();
const mockLocation = { pathname: "/travel_plan/1" };

vi.mock("react-router-dom", async () => {
  const original = await vi.importActual("react-router-dom");
  return {
    ...original,
    useParams: () => ({ travelPlanId: "1" }),
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  };
});

describe("TravelPlanContent Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("여행 일정 화면에 기본 그룹과 음식점 그룹 버튼이 표시된다", () => {
    render(
      <MemoryRouter initialEntries={["/travel_plan/1"]}>
        <Routes>
          <Route
            path="/travel_plan/:travelPlanId"
            element={<TravelPlanContent />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("기본 그룹")).toBeInTheDocument();
    expect(screen.getByText("음식점 그룹")).toBeInTheDocument();
  });

  it("그룹 버튼을 누르면 해당하는 그룹 페이지로 넘어간다", () => {
    render(
      <MemoryRouter initialEntries={["/travel_plan/1"]}>
        <Routes>
          <Route
            path="/travel_plan/:travelPlanId"
            element={<TravelPlanContent />}
          />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("기본 그룹"));
    expect(mockNavigate).toHaveBeenCalledWith("/travel_plan/1/place_groups/1");

    fireEvent.click(screen.getByText("음식점 그룹"));
    expect(mockNavigate).toHaveBeenCalledWith("/travel_plan/1/place_groups/2");
  });

  it("여행 일정의 토글 표시를 누르면 일정이 표시된다", () => {
    render(
      <MemoryRouter initialEntries={["/travel_plan/1"]}>
        <Routes>
          <Route
            path="/travel_plan/:travelPlanId"
            element={<TravelPlanContent />}
          />
        </Routes>
      </MemoryRouter>
    );

    const scheduleItem = screen.getByText(scheduleList[0].date);
    expect(scheduleItem).toBeInTheDocument();

    fireEvent.click(scheduleItem);
  });
});

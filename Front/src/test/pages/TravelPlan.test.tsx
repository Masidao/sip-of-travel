import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeAll, describe, expect, it, vi } from "vitest";
import TravelPlan from "../../pages/TravelPlan";

beforeAll(() => {
  global.window.kakao = {
    maps: {
      LatLng: vi.fn(),
      Map: vi.fn(),
    },
  };
});

describe("TravelPlan Component", () => {
  it("없는 일정인 경우 not found를 표시한다", () => {
    render(
      <MemoryRouter initialEntries={["/travel-plans/999"]}>
        <Routes>
          <Route path="/travel-plans/:travelPlanId" element={<TravelPlan />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it("유효한 travelPlanId로 TravelPlan을 정상적으로 렌더링한다", () => {
    render(
      <MemoryRouter initialEntries={["/travel-plans/1"]}>
        <Routes>
          <Route path="/travel-plans/:travelPlanId" element={<TravelPlan />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/여행/)).toBeInTheDocument();
  });
});

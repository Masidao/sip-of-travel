import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import TravelPlan from "../../pages/TravelPlan";

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
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PlaceGroups from "../../components/placeGroups/PlaceGroups";

describe("PlaceGroups Component", () => {
  it("group 모드(그룹 버튼 클릭)에서는 하단에 '새로운 장소 추가하기'버튼이 표시된다", () => {
    render(
      <MemoryRouter initialEntries={["/place_groups/1"]}>
        <Routes>
          <Route
            path="/place_groups/:groupId"
            element={<PlaceGroups mode="group" />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("새로운 장소 추가하기")).toBeInTheDocument();
  });
  it("schedule 모드(일정 추가 버튼 클릭)에서는 하단에 '장소 저장하기'버튼이 표시된다", () => {
    render(
      <MemoryRouter initialEntries={["/schedules/1"]}>
        <Routes>
          <Route
            path="/schedules/:dailyScheduleId"
            element={<PlaceGroups mode="schedule" />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("장소 저장하기")).toBeInTheDocument();
  });

  it("schedule 모드에서 장소가 선택되지 않는다면 '장소 저장하기'버튼은 비활성화된다 ", () => {
    render(
      <MemoryRouter initialEntries={["/schedules/1"]}>
        <Routes>
          <Route
            path="/schedules/:dailyScheduleId"
            element={<PlaceGroups mode="schedule" />}
          />
        </Routes>
      </MemoryRouter>
    );

    const saveButton = screen.getByText("장소 저장하기");
    expect(saveButton).toBeDisabled();
  });
});

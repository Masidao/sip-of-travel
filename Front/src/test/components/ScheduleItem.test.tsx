import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ScheduleItem from "../../components/schedule/ScheduleItem";
import scheduleDetails from "../../../data/scheduleDetails.json";

describe("ScheduleItem Component", () => {
  const mockOnClickChevron = vi.fn();

  it("일정이 올바르게 표시된다", () => {
    render(
      <ScheduleItem
        id={1}
        date="2024-09-15"
        hasSchedule={true}
        isOpen={false}
        onClickChevron={mockOnClickChevron}
      />
    );

    expect(screen.getByText("Day 1")).toBeInTheDocument();
    expect(screen.getByText("2024-09-15")).toBeInTheDocument();
  });

  it("아이콘이 클릭되면 해당 세부 일정이 표시된다", () => {
    render(
      <ScheduleItem
        id={1}
        date="2024-09-15"
        hasSchedule={true}
        isOpen={true}
        onClickChevron={mockOnClickChevron}
      />
    );

    const scheduleDetail = scheduleDetails.find((detail) => detail.id === 1)
      ?.schedule_details[0].place_name;

    expect(screen.getByText(scheduleDetail || "")).toBeInTheDocument();
  });
});

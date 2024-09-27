import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { format } from "date-fns";
import Calendar from "../../components/calendar/Calendar";

describe("Calendar Component", () => {
  const currentDate = new Date();
  const mockOnDateClick = vi.fn();

  it("달력이 표시된다", () => {
    render(
      <Calendar
        currentDate={currentDate}
        selectedDates={[]}
        onDateClick={mockOnDateClick}
      />
    );

    const monthHeader = screen.getByText(format(currentDate, "yyyy년 MM월"));
    expect(monthHeader).toBeInTheDocument();

    const dayElements = screen.getAllByText("1");
    fireEvent.click(dayElements[0]);
  });
});

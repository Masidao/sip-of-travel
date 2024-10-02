import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Cities from "../../pages/Cities";
import citiesList from "../../../data/citiesList.json";

describe("Home Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Cities />
      </MemoryRouter>
    );
  });

  it("검색창과 도시 리스트가 표시된다", () => {
    const searchInput = screen.getByPlaceholderText("여행지를 골라다오");
    expect(searchInput).toBeInTheDocument();

    citiesList.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
  });

  it("검색한 도시가 필터링 되어 리스트에 표시된다", () => {
    const searchInput = screen.getByPlaceholderText("여행지를 골라다오");
    fireEvent.change(searchInput, { target: { value: "제" } });

    expect(screen.getByText("제주")).toBeInTheDocument();
    expect(screen.queryByText("가평")).not.toBeInTheDocument();
  });

  it("선택된 도시가 하단에 추가된다", () => {
    const cityItem = screen.getByText("제주");
    fireEvent.click(cityItem);

    expect(screen.getAllByText("제주")[0]).toBeInTheDocument();
    expect(screen.getAllByText("제주")[1]).toBeInTheDocument();
  });

  it("선택된 도시의 제거 버튼을 클릭하면 하단에서 제거된다", () => {
    const cityItem = screen.getAllByText("제주");
    fireEvent.click(cityItem[cityItem.length - 1]);

    const removeButton = screen.getByText("×");
    fireEvent.click(removeButton);

    const element = screen.getAllByText("제주");
    expect(element).toHaveLength(1);
  });
});

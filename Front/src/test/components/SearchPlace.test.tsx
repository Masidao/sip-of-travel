import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, describe, it } from "vitest";
import SearchPlace from "../../components/searchPlace/SearchPlace";

describe("SearchPlace component", () => {
  it("검색된다면 검색 결과가 표시된다", async () => {
    render(
      <MemoryRouter>
        <SearchPlace />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("장소를 입력하세요");
    fireEvent.change(input, { target: { value: "카페" } });

    const searchIcon = screen.getByTestId("search-icon");
    fireEvent.click(searchIcon);
  });

  it("장소가 선택되지 않는다면 '장소 저장하기'버튼은 비활성화된다", () => {
    render(
      <MemoryRouter>
        <SearchPlace />
      </MemoryRouter>
    );

    const saveButton = screen.getByText("장소 저장하기");
    expect(saveButton).toBeDisabled();
  });
});

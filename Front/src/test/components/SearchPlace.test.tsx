import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, describe, it, vi, beforeEach } from "vitest";
import SearchPlace from "../../components/searchPlace/SearchPlace";

const mockKeywordSearch = vi.fn();
const mockLatLng = vi.fn();

describe("SearchPlace component", () => {
  beforeEach(() => {
    // Kakao Maps API 전역 객체 모킹
    (window as any).kakao = {
      maps: {
        services: {
          Places: function () {
            return {
              keywordSearch: mockKeywordSearch,
            };
          },
          Status: {
            OK: "OK",
          },
        },
        LatLng: mockLatLng,
      },
    };

    // 테스트용 검색 결과 데이터
    const mockSearchResults = [
      {
        id: "1234",
        place_name: "테스트 카페",
      },
    ];

    // keywordSearch 함수가 비동기적으로 결과를 반환하도록 설정
    mockKeywordSearch.mockImplementation((keyword, callback) => {
      setTimeout(() => {
        callback(mockSearchResults, "OK");
      }, 0);
    });
  });

  it("검색하면 검색 결과가 표시된다", async () => {
    render(
      <MemoryRouter>
        <SearchPlace />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("장소를 입력하세요");
    fireEvent.change(input, { target: { value: "카페" } });

    const searchIcon = screen.getByTestId("search-icon");
    fireEvent.click(searchIcon);

    await waitFor(() => {
      expect(screen.getByText("테스트 카페")).toBeInTheDocument();
    });
  });

  it("장소가 선택된다면 '장소 저장하기'버튼은 활성화된다", async () => {
    render(
      <MemoryRouter>
        <SearchPlace />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("장소를 입력하세요");
    fireEvent.change(input, { target: { value: "카페" } });

    const searchIcon = screen.getByTestId("search-icon");
    fireEvent.click(searchIcon);

    await waitFor(() => {
      expect(screen.getByText("테스트 카페")).toBeInTheDocument();
      const clickButton = screen.getAllByText("선택");
      fireEvent.click(clickButton[0]);

      const saveButton = screen.getByText("장소 저장하기");
      expect(saveButton).toBeEnabled();
    });
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

import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import BasicMap from "../../components/map/BasicMap";

beforeAll(() => {
  global.window.kakao = {
    maps: {
      LatLng: vi.fn(),
      Map: vi.fn(),
    },
  };
});

describe("BasicMap component", () => {
  it("지도를 표시한다", () => {
    const { container } = render(
      <BasicMap lat={37.5665} lng={126.978} level={3} />
    );

    const mapContainer = container.querySelector("#map");
    expect(mapContainer).toBeInTheDocument();
    expect(mapContainer).toHaveStyle({ width: "100%", height: "100%" });
  });

  it("해당 좌표의 지도를 표시한다", () => {
    render(<BasicMap lat={35.723817} lng={127.483131} level={14} />);

    expect(window.kakao.maps.LatLng).toHaveBeenCalledWith(37.5665, 126.978);
    expect(window.kakao.maps.Map).toHaveBeenCalled();
  });
});

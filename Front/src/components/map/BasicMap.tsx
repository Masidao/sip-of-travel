import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

function BasicMap() {
  useKakaoLoader();

  return (
    <Map
      id="map"
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "100%", height: "100%" }}
      level={3} // 지도의 확대 레벨
    />
  );
}

export default BasicMap;

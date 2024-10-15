import { useEffect } from "react";

interface MapProps {
  lat: number;
  lng: number;
}

const Map: React.FC<MapProps> = ({ lat, lng }) => {
  useEffect(() => {
    const container = document.getElementById("map");
    if (!container) return;

    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: 10,
    };
    const kakaoMap = new window.kakao.maps.Map(container, options);
  }, [lat, lng]);

  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default Map;

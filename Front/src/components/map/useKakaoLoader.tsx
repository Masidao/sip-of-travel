import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_MAP_API_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });
}

export default useKakaoLoader;

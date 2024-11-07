interface Window {
  kakao: {
    maps: {
      LatLng: new (lat: number, lng: number) => any;
      Map: new (container: HTMLElement, options: any) => any;
      LatLngBounds: new () => any;
      services: {
        Places: new () => {
          keywordSearch: (
            keyword: string,
            callback: (data: any, status: string, pagination: any) => void,
            options?: object
          ) => void;
        };
        Status: {
          OK: string;
          ZERO_RESULT: string;
          ERROR: string;
        };
      };
    };
  };
}

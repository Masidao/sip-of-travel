interface Window {
  kakao: {
    maps: {
      LatLng: new (lat: number, lng: number) => any;
      Map: new (container: HTMLElement, options: any) => any;
    };
  };
}

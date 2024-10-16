import citiesList from "../../data/citiesList.json";


export const getCityName = (city_id: number): string => {
  const city = citiesList.find((city) => city.id === city_id);
  return city ? city.name : "국내";
};

export const getCityMap = (city_id: number) => {
  const city = citiesList.find((city) => city.id === city_id);
  if (!city) {
    return { lat: 35.723817, lng: 127.483131, level: 14 };
  }

  return {
    lat: city.city_latitude ?? 35.723817,
    lng: city.city_longitude ?? 127.483131,
    level: city.city_level ?? 14,
  };
};

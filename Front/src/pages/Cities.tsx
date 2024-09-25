import React, { useState } from "react";
import * as S from "../styles/cities.style";
import { useNavigate } from "react-router-dom";
import citiesList from "../../data/citiesList.json";

interface City {
  id: number;
  name: string;
  img: string;
}

const Cities: React.FC = () => {
  const navigate = useNavigate();
  const handleSelectCities = () => navigate("/calendar");

  const [searchCity, setSearchCity] = useState("");
  const [selectedCities, setSelectedCities] = useState<City[]>([]);

  const filteredCities = citiesList.filter((city) =>
    city.name.includes(searchCity)
  );

  const handleSelectCity = (city: City) => {
    if (!selectedCities.some((selectedCity) => selectedCity.id === city.id)) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleRemoveCity = (cityId: number) => {
    setSelectedCities(selectedCities.filter((city) => city.id !== cityId));
  };

  console.log(selectedCities.length);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.SearchBox>
            <S.SearchInput
              type="search"
              placeholder="여행지를 골라다오"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <S.StyledSearchIcon />
          </S.SearchBox>
        </S.Header>
        <S.ScrollArea>
          {filteredCities.map(({ id, name, img }) => (
            <S.Item
              key={id}
              onClick={() => handleSelectCity({ id, name, img })}
            >
              <S.Image src={`img/${img}`} alt={name} />
              <S.Title>{name}</S.Title>
            </S.Item>
          ))}
        </S.ScrollArea>
        <S.Footer>
          <div>
            <S.SelectedCitiesArea $isempty={selectedCities.length === 0}>
              {selectedCities.map((city) => (
                <S.SelectedCity key={city.id}>
                  <S.RemoveButton onClick={() => handleRemoveCity(city.id)}>
                    ×
                  </S.RemoveButton>
                  <S.SelectedCityImage
                    src={`/img/${city.img}`}
                    alt={city.name}
                  />
                  <S.SelectedCityName>{city.name}</S.SelectedCityName>
                </S.SelectedCity>
              ))}
            </S.SelectedCitiesArea>
          </div>
          <S.ButtonWrapper>
            <S.Button
              onClick={handleSelectCities}
              disabled={selectedCities.length === 0}
            >
              선택 완료
            </S.Button>
          </S.ButtonWrapper>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Cities;

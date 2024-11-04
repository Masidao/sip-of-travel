import React, { useState } from "react";
import * as S from "../styles/cities.style";
import { useNavigate } from "react-router-dom";
import citiesList from "../../data/citiesList.json";
import { Footer, Header, Container, Wrapper, ScrollArea } from "../styles/layout.style";
import { ToggleButton } from "../styles/button.style";
import SearchBox from "../components/searchBox/SearchBox";
import useTravelStore from "../stores/useTravelStore";

export interface City {
  id: number;
  name: string;
  city_image: string;
}

const Cities: React.FC = () => {
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState("");
  const { selectedCities, addCity, removeCity } = useTravelStore();

  const filteredCities = citiesList.filter((city) =>
    city.name.includes(searchCity)
  );

  const handleSelectCity = (city: City) => {
    if (!selectedCities.some((selectedCity) => selectedCity.id === city.id)) {
      addCity(city);
    }
  };

  const handleRemoveCity = (cityId: number) => removeCity(cityId);
  const handleSelectCities = () => navigate("/dates");

  return (
    <Container>
      <Wrapper>
        <Header>
          <SearchBox
            placeholder="여행지를 골라다오"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </Header>
        <ScrollArea>
          {filteredCities.map(({ id, name, city_image }) => (
            <S.Item
              key={id}
              onClick={() => handleSelectCity({ id, name, city_image })}
            >
              <S.Image src={`img/${city_image}`} alt={name} />
              <S.Title>{name}</S.Title>
            </S.Item>
          ))}
        </ScrollArea>
        <Footer>
          <div>
            <S.SelectedCitiesArea $isempty={selectedCities.length === 0}>
              {selectedCities.map(({ id, name, city_image }) => (
                <S.SelectedCity key={id}>
                  <S.RemoveButton onClick={() => handleRemoveCity(id)}>
                    ×
                  </S.RemoveButton>
                  <S.SelectedCityImage src={`/img/${city_image}`} alt={name} />
                  <S.SelectedCityName>{name}</S.SelectedCityName>
                </S.SelectedCity>
              ))}
            </S.SelectedCitiesArea>
          </div>
          <S.ButtonWrapper>
            <ToggleButton
              onClick={handleSelectCities}
              disabled={selectedCities.length === 0}
            >
              선택 완료
            </ToggleButton>
          </S.ButtonWrapper>
        </Footer>
      </Wrapper>
    </Container>
  );
};

export default Cities;

import React, { useState } from "react";
import * as S from "../styles/cities.style";
import { useNavigate } from "react-router-dom";
import citiesList from "../../data/citiesList.json";
import { Footer, Header, Container, Wrapper } from "../styles/layout.style";
import { ToggleButton } from "../styles/button.style";
import SearchBox from "../components/searchBox/SearchBox";

interface City {
  id: number;
  name: string;
  img: string;
}

const Cities: React.FC = () => {
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState("");
  const [selectedCities, setSelectedCities] = useState<City[]>([]);

  const filteredCities = citiesList.filter((city) =>
    city.name.includes(searchCity)
  );

  const handleSelectCities = () => {
    const selectedCityIds = selectedCities.map((city) => city.id);
    localStorage.setItem("selectedCityIds", JSON.stringify(selectedCityIds));
    navigate("/dates");
  };

  const handleSelectCity = (city: City) => {
    if (!selectedCities.some((selectedCity) => selectedCity.id === city.id)) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleRemoveCity = (cityId: number) => {
    setSelectedCities(selectedCities.filter((city) => city.id !== cityId));
  };

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
        <S.ScrollArea>
          {filteredCities.map(({ id, name, img }) => (
            <S.Item key={id} onClick={() => handleSelectCity({ id, name, img })}>
              <S.Image src={`img/${img}`} alt={name} />
              <S.Title>{name}</S.Title>
            </S.Item>
          ))}
        </S.ScrollArea>
        <Footer>
          <div>
            <S.SelectedCitiesArea $isempty={selectedCities.length === 0}>
              {selectedCities.map(({ id, name, img }) => (
                <S.SelectedCity key={id}>
                  <S.RemoveButton onClick={() => handleRemoveCity(id)}>×</S.RemoveButton>
                  <S.SelectedCityImage src={`/img/${img}`} alt={name} />
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

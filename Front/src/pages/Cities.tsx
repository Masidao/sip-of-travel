import React, { useState } from "react";
import * as S from "../styles/cities.style";
import { useNavigate } from "react-router-dom";
import citiesList from "../../data/citiesList.json";

const Cities: React.FC = () => {
  const navigate = useNavigate();
  const handleSelectCities = () => navigate("/calendar");
  const [searchCity, setSearchCity] = useState("");

  const filteredCities = citiesList.filter((city) =>
    city.name.includes(searchCity)
  );
  return (
    <S.Container>
      <S.Wrapper>
        <S.SearchBox>
          <S.SearchInput
            type="search"
            placeholder="여행지를 골라다오"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <S.StyledSearchIcon />
        </S.SearchBox>
        <S.ScrollArea>
          {filteredCities.map(({ id, name, img }) => (
            <S.Item key={id}>
              <S.Image src={`img/${img}`} alt={name} />
              <S.Title>{name}</S.Title>
            </S.Item>
          ))}
        </S.ScrollArea>
        <S.Button onClick={handleSelectCities}>선택 완료</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Cities;

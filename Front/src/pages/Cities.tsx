import React from "react";
import * as S from "../styles/cities.style";
import { useNavigate } from "react-router-dom";
import citiesList from "../../data/citiesList.json";

const Cities: React.FC = () => {
  const navigate = useNavigate();
  const handleSelectCities = () => navigate("/calendar");

  return (
    <S.Container>
      <S.Wrapper>
        <S.ScrollArea>
          {citiesList.map(({ id, name, img }) => (
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

import React from "react";
import * as S from "../styles/cities.style";
import { useNavigate } from "react-router-dom";

const Cities: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmitSchedule = () => navigate("/calendar");

  return (
    <S.Container>
      <S.Wrapper>
        <S.Button onClick={handleSubmitSchedule}>선택 완료</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Cities;

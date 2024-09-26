import React, { useState } from "react";
import * as S from "../styles/dates.style";
import { Container, Wrapper } from "../styles/layout.style";
import { ToggleButton } from "../styles/button.style";

const Dates: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const handleSelectedDates = () => {};

  return (
    <Container>
      <Wrapper>
        <S.DatesHeader>
          <S.Title>여행 일정 등록</S.Title>
          <div>각 날짜별 계획하신 여행 일정을 안내해 드립니다.</div>
        </S.DatesHeader>
        <S.DatesArea></S.DatesArea>
        <S.DatesFooter>
          <ToggleButton
            onClick={handleSelectedDates}
            disabled={selectedDates.length === 0}
          >
            {selectedDates.length > 0 ? "선택 완료" : "일정을 선택해주세요"}
          </ToggleButton>
        </S.DatesFooter>
      </Wrapper>
    </Container>
  );
};

export default Dates;

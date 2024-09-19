import React from "react";
import * as S from "../styles/home.style";
import citiesList from "../../data/citiesList.json";

const user = "다오";

const schedules = [
  {
    id: 1,
    city_id: 1,
    start_date: "2024-09-15",
    end_date: "2023-09-16",
  },
  {
    id: 2,
    city_id: 6,
    start_date: "2024-09-15",
    end_date: "2023-09-16",
  },
];

const Home: React.FC = () => {
  const getCityName = (city_id: number): string => {
    const city = citiesList.find((city) => city.id === city_id);
    return city ? city.name : "국내";
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{user}님 환영합니다!</S.Title>
        <S.ScrollArea>
          {schedules.length > 0 ? (
            schedules.map(({ id, city_id, start_date, end_date }) => (
              <S.ScheduleItem key={id}>
                <S.ScheduleTitle>{getCityName(city_id)} 여행</S.ScheduleTitle>
                <S.ScheduleDate>
                  {start_date} ~ {end_date}
                </S.ScheduleDate>
              </S.ScheduleItem>
            ))
          ) : (
            <S.Message>일정을 추가해주세요.</S.Message>
          )}
        </S.ScrollArea>
        <S.Button>일정 추가</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;

import { FC } from "react";
import * as S from "../styles/travelPlan.style";
import { useParams } from "react-router-dom";
import { Container, Wrapper } from "../styles/layout.style";
import schedules from "../../data/schedules.json";
import citiesList from "../../data/citiesList.json";
import scheduleList from "../../data/scheduleList.json";
import StarsIcon from "../assets/StarsIcon";
import { AddScheduleButton, GroupButton } from "../styles/button.style";
import BasicMap from "../components/map/BasicMap";

const TravelPlan: FC = () => {
  const { travelPlanId } = useParams();

  const travelPlan = schedules.find((plan) => plan.id === Number(travelPlanId));

  const getCityName = (city_id: number): string => {
    const city = citiesList.find((city) => city.id === city_id);
    return city ? city.name : "국내";
  };
  // 나중엔 /api/travel_plans/{travel_plan_id} GET 요청

  if (!travelPlan) {
    return <h1>not found</h1>; // TODO: error page 만들기
  }

  const { city_id, start_date, end_date } = travelPlan;

  return (
    <Container>
      <Wrapper>
        <S.PlanHeader>
          <S.Title>{getCityName(city_id)} 여행</S.Title>
          <div>
            {start_date} ~ {end_date}
          </div>
        </S.PlanHeader>
        <S.Map>
          <BasicMap />
        </S.Map>
        <S.Group>
          <GroupButton>
            <StarsIcon />
            기본 그룹
          </GroupButton>
          <GroupButton>
            <StarsIcon />
            음식점 그룹
          </GroupButton>
        </S.Group>
        <S.Schedules>
          {scheduleList.map(({ id, date, has_schedule }) => (
            <S.ScheduleItem key={id}>
              <S.ItemHeader>
                <S.ItemTitle>
                  <div className="day">Day {id}</div>
                  <div className="date">{date}</div>
                </S.ItemTitle>
                <AddScheduleButton>일정추가</AddScheduleButton>
              </S.ItemHeader>
              <div>{has_schedule ? <></> : <></>}</div>
            </S.ScheduleItem>
          ))}
        </S.Schedules>
      </Wrapper>
    </Container>
  );
};

export default TravelPlan;

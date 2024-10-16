import { FC, useState } from "react";
import * as S from "../styles/travelPlan.style";
import { useParams } from "react-router-dom";
import { Container, Wrapper } from "../styles/layout.style";
import travelPlanData from "../../data/travelPlan.json";
import scheduleList from "../../data/scheduleList.json";
import StarsIcon from "../assets/StarsIcon";
import { GroupButton } from "../styles/button.style";
import BasicMap from "../components/map/BasicMap";
import ScheduleItem from "../components/schedule/ScheduleItem";
import { getCityMap, getCityName } from "../utils/getCityData";

const TravelPlan: FC = () => {
  const { travelPlanId } = useParams();
  const [openSchedules, setOpenSchedules] = useState<{
    [key: number]: boolean;
  }>({});

  const travelPlan = travelPlanData.find(
    (plan) => plan.id === Number(travelPlanId)
  );

  // 나중엔 /api/travel_plans/{travel_plan_id} GET 요청

  if (!travelPlan) {
    return <h1>not found</h1>; // TODO: error page 만들기
  }

  const handleClickChevron = (id: number) =>
    setOpenSchedules((prev) => ({ ...prev, [id]: !prev[id] }));

  const { city_id, start_date, end_date } = travelPlan;
  const { lat, lng, level } = getCityMap(city_id);

  return (
    <Container>
      <Wrapper>
        <S.PlanHeader>
          <S.Title>{getCityName(city_id)} 여행</S.Title>
          <S.SubTitle>
            {start_date} ~ {end_date}
          </S.SubTitle>
        </S.PlanHeader>
        <S.MapBox>
          <BasicMap lat={lat} lng={lng} level={level} />
        </S.MapBox>
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
            <ScheduleItem
              key={id}
              id={id}
              date={date}
              hasSchedule={has_schedule}
              isOpen={openSchedules[id]}
              onClickChevron={handleClickChevron}
            />
          ))}
        </S.Schedules>
      </Wrapper>
    </Container>
  );
};

export default TravelPlan;

import { FC, useState } from "react";
import * as S from "../styles/travelPlan.style";
import { useParams } from "react-router-dom";
import { Container, Wrapper } from "../styles/layout.style";
import travelPlanData from "../../data/travelPlan.json";
import citiesList from "../../data/citiesList.json";
import scheduleList from "../../data/scheduleList.json";
import StarsIcon from "../assets/StarsIcon";
import { GroupButton } from "../styles/button.style";
import Map from "../components/map/Map";
import ScheduleItem from "../components/schedule/ScheduleItem";

const TravelPlan: FC = () => {
  const { travelPlanId } = useParams();
  const [openSchedules, setOpenSchedules] = useState<{ [key: number]: boolean }>({});

  const travelPlan = travelPlanData.find(
    (plan) => plan.id === Number(travelPlanId)
  );

  const getCityName = (city_id: number): string => {
    const city = citiesList.find((city) => city.id === city_id);
    return city ? city.name : "국내";
  };

  const getCityMap = (city_id: number) => {
    const city = citiesList.find((city) => city.id === city_id);
    if (!city) {
      return { lat: 35.723817, lng: 127.483131, level: 14 };
    }

    return {
      lat: city.city_latitude ?? 35.723817,
      lng: city.city_longitude ?? 127.483131,
      level: city.city_level ?? 14,
    };
  };
  // 나중엔 /api/travel_plans/{travel_plan_id} GET 요청

  if (!travelPlan) {
    return <h1>not found</h1>; // TODO: error page 만들기
  }

  const handleClickChevron = (id: number) => {
    setOpenSchedules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const { city_id, start_date, end_date } = travelPlan;
  const { lat, lng, level } = getCityMap(city_id);

  return (
    <Container>
      <Wrapper>
        <S.PlanHeader>
          <S.Title>{getCityName(city_id)} 여행</S.Title>
          <S.Date>
            {start_date} ~ {end_date}
          </S.Date>
        </S.PlanHeader>
        <S.Map>
          <Map lat={lat} lng={lng} level={level} />
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

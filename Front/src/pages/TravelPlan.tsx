import { FC } from "react";
import * as S from "../styles/travelPlan.style";
import { Outlet, useParams } from "react-router-dom";
import { Container, Wrapper } from "../styles/layout.style";
import travelPlanData from "../../data/travelPlan.json";
import { getCityName } from "../utils/getCityData";

const TravelPlan: FC = () => {
  const { travelPlanId } = useParams();

  const travelPlan = travelPlanData.find(
    (plan) => plan.id === Number(travelPlanId)
  );

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
          <S.SubTitle>
            {start_date} ~ {end_date}
          </S.SubTitle>
        </S.PlanHeader>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default TravelPlan;

import { FC, useState } from "react";
import * as S from "../../styles/travelPlan.style";
import { useParams } from "react-router-dom";
import scheduleList from "../../../data/scheduleList.json";
import travelPlanData from "../../../data/travelPlan.json";
import BasicMap from "../map/BasicMap";
import { GroupButton } from "../../styles/button.style";
import StarsIcon from "../../assets/StarsIcon";
import { getCityMap } from "../../utils/getCityData";
import ScheduleItem from "../schedule/ScheduleItem";

const TravelPlanContent: FC = () => {
  const { travelPlanId } = useParams();
  const [openSchedules, setOpenSchedules] = useState<{
    [key: number]: boolean;
  }>({});

  const travelPlan = travelPlanData.find(
    (plan) => plan.id === Number(travelPlanId)
  );

  if (!travelPlan) return null;

  const handleClickChevron = (id: number) =>
    setOpenSchedules((prev) => ({ ...prev, [id]: !prev[id] }));

  const { city_id } = travelPlan;
  const { lat, lng, level } = getCityMap(city_id);

  return (
    <>
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
    </>
  );
};

export default TravelPlanContent;

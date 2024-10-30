import * as S from "../../styles/schedule.style";
import ChevronIcon from "../../assets/ChevronIcon";
import { AddScheduleButton } from "../../styles/button.style";
import ScheduleDetail from "./ScheduleDetail";
import scheduleDetails from "../../../data/scheduleDetails.json";
import { useNavigate, useParams } from "react-router-dom";

interface ScheduleItemProps {
  id: number;
  date: string;
  hasSchedule: boolean;
  isOpen: boolean;
  onClickChevron: (id: number) => void;
}

const ScheduleItem = ({
  id,
  date,
  hasSchedule,
  isOpen,
  onClickChevron,
}: ScheduleItemProps) => {
  const navigate = useNavigate();
  const { travelPlanId } = useParams();

  const getScheduleDetails = (id: number) =>
    scheduleDetails.find((detail) => detail.id === id)?.schedule_details || [];

  const handleAddSchedule = () => {
    navigate(`/travel_plans/${travelPlanId}/schedules/${id}`);
  };

  return (
    <S.Schedule>
      <S.ItemHeader>
        <S.ItemTitle>
          <div className="day">Day {id}</div>
          <div className="date">{date}</div>
          {hasSchedule && <ChevronIcon onClick={() => onClickChevron(id)} />}
        </S.ItemTitle>
        <AddScheduleButton onClick={handleAddSchedule}>
          일정추가
        </AddScheduleButton>
      </S.ItemHeader>
      {hasSchedule && isOpen && (
        <ScheduleDetail scheduleDetails={getScheduleDetails(id)} />
      )}
      
    </S.Schedule>
    
  );
};

export default ScheduleItem;

import { FC } from "react";
import * as S from "../../styles/schedule.style";
import ChevronIcon from "../../assets/ChevronIcon";
import { AddScheduleButton } from "../../styles/button.style";
import ScheduleDetail from "./ScheduleDetail";
import scheduleDetails from "../../../data/scheduleDetails.json";

interface ScheduleItemProps {
  id: number;
  date: string;
  hasSchedule: boolean;
  isOpen: boolean;
  onClickChevron: (id: number) => void;
}

const ScheduleItem: FC<ScheduleItemProps> = ({
  id,
  date,
  hasSchedule,
  isOpen,
  onClickChevron,
}) => {
  const getScheduleDetails = (id: number) => {
    return (
      scheduleDetails.find((detail) => detail.id === id)?.schedule_details || []
    );
  };

  return (
    <S.Schedule>
      <S.ItemHeader>
        <S.ItemTitle>
          <div className="day">Day {id}</div>
          <div className="date">{date}</div>
          {hasSchedule && <ChevronIcon onClick={() => onClickChevron(id)} />}
        </S.ItemTitle>
        <AddScheduleButton>일정추가</AddScheduleButton>
      </S.ItemHeader>
      {hasSchedule && isOpen && (
        <ScheduleDetail scheduleDetails={getScheduleDetails(id)} />
      )}
    </S.Schedule>
  );
};

export default ScheduleItem;

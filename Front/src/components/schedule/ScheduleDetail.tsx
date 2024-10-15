import * as S from "../../styles/schedule.style";

interface ScheduleDetail {
  id: number;
  sequence: number;
  place_id: number;
  place_name: string;
  place_category: string;
}

interface ScheduleDetailsProps {
  scheduleDetails: ScheduleDetail[];
}

const ScheduleDetail = ({ scheduleDetails }: ScheduleDetailsProps) => {
  return (
    <S.ScheduleList>
      {scheduleDetails.map(({ id, place_name }) => (
        <S.ScheduleItem key={id}>
          <div className="name">{place_name}</div>
        </S.ScheduleItem>
      ))}
    </S.ScheduleList>
  );
};

export default ScheduleDetail;

import * as S from "../styles/dates.style";
import { format } from "date-fns";
import { Container, Wrapper } from "../styles/layout.style";
import { ToggleButton } from "../styles/button.style";
import Calendar from "../components/calendar/Calendar";
import { useNavigate } from "react-router-dom";
import useTravelStore from "../stores/useTravelStore";

const Dates: React.FC = () => {
  const navigate = useNavigate();
  const { selectedDates, setSelectedDates, selectedCities } = useTravelStore();

  const currentDate = new Date();

  const handleDateClick = (date: Date) => {
    setSelectedDates((prev) => {
      if (prev.length === 0 || prev.length === 2) return [date];
      return [...prev, date].sort((a, b) => a.getTime() - b.getTime());
    });
  };

  const handleSelectDates = () => {
    // const travelPlan = {
    //   cities: selectedCities.map((city) => city.id),
    //   startDate: selectedDates[0],
    //   endDate: selectedDates[selectedDates.length - 1],
    // };
    // 여행 일정 post 요청
    navigate("/travel_plans");
  };

  const startDate = selectedDates[0];
  const endDate = selectedDates[selectedDates.length - 1];

  return (
    <Container>
      <Wrapper>
        <S.DatesHeader>
          <S.Title>여행 일정 등록</S.Title>
          <div>각 날짜별 계획하신 여행 일정을 안내해 드립니다.</div>
        </S.DatesHeader>
        <S.DatesArea>
          <Calendar
            currentDate={currentDate}
            selectedDates={selectedDates}
            onDateClick={handleDateClick}
          />
        </S.DatesArea>
        <S.DatesFooter>
          <ToggleButton
            onClick={handleSelectDates}
            disabled={selectedDates.length === 0}
          >
            {selectedDates.length > 0
              ? `${format(startDate, "yy.MM.dd")} ~ ${format(endDate, "MM.dd")} / 선택 완료`
              : "일정을 선택해주세요"}
          </ToggleButton>
        </S.DatesFooter>
      </Wrapper>
    </Container>
  );
};

export default Dates;

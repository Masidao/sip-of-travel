import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval, // 시작일과 종료일 사이의 모든 날짜 배열 return
  format,
  isSameDay,
  isWithinInterval,
  getDay, // 날짜의 요일 return
} from "date-fns";

interface CalendarProps {
  currentDate: Date;
  selectedDates: Date[];
  onDateClick: (date: Date) => void;
}

const week = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDates,
  onDateClick,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  const months = Array.from({ length: 13 }, (_, i) => addMonths(subMonths(currentDate, 6), i));
  // 13개월 달 구성. 변경 가능성 있음

  useEffect(() => {
    const currentMonth = calendarRef.current?.children[Math.floor(months.length/2)];
    currentMonth?.scrollIntoView({ behavior: "instant", block: "center" }); // 단번에 보이게, 수직 중앙에 위치
  }, []);

  const isDateInRange = (date: Date) =>
    selectedDates.length === 2 &&
    isWithinInterval(date, {
      start: selectedDates[0],
      end: selectedDates[1],
    });

  const isStartDate = (date: Date) => isSameDay(date, selectedDates[0]);
  const isEndDate = (date: Date) => isSameDay(date, selectedDates[1]);

  return (
    <Container ref={calendarRef}>
      {months.map((month) => (
        <MonthContainer key={format(month, "yyyy-MM")}>
          <MonthHeader>{format(month, "yyyy년 MM월")}</MonthHeader>
          <WeekDays>
            {week.map((day) => (
              <WeekDay key={day}>{day}</WeekDay>
            ))}
          </WeekDays>
          <DaysGrid>
            {[...Array(getDay(startOfMonth(month))).keys()].map((_, i) => (
              <div key={i} />
            ))}
            {eachDayOfInterval({
              start: startOfMonth(month),
              end: endOfMonth(month),
            }).map((date) => (
              <Day
                key={format(date, "yy-MM-dd")}
                onClick={() => onDateClick(date)}
                $isInRange={isDateInRange(date)}
                $isStartDate={isStartDate(date)}
                $isEndDate={isEndDate(date)}
              >
                {format(date, "d")}
              </Day>
            ))}
          </DaysGrid>
        </MonthContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 75vh;
  overflow-y: auto;
  background-color: #fcfcfc;
  box-shadow: 0px 5px #fcfcfc;
  padding: 20px;
`;

const MonthContainer = styled.div`
  padding-bottom: 2rem;
`;

const MonthHeader = styled.h3`
  text-align: center;
  margin: 2rem 0;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  height: 40px;
`;

const WeekDay = styled.div`
  padding: 5px;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div<{
  $isInRange: boolean;
  $isStartDate: boolean;
  $isEndDate: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  margin: 2px auto;
  cursor: pointer;
  position: relative;
  z-index: 1;
  color: ${({ $isStartDate, $isEndDate }) =>
    $isStartDate || $isEndDate ? "white" : "black"};

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 40px;
    background-color: ${({ $isInRange }) => ($isInRange ? "#E7F0FF" : "unset")};
    margin-left: ${({ $isStartDate }) => ($isStartDate ? "50%" : "unset")};
    margin-right: ${({ $isEndDate }) => ($isEndDate ? "50%" : "unset")};
    z-index: -1;
    transform: translateY(-50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    ${({ $isStartDate, $isEndDate }) =>
      $isStartDate || $isEndDate
        ? `
        width: 40px;
        height: 40px;
        background-color: #4E94F8;
        border-radius: 50%;`
        : `
        background-color: transparent;
      `}
  }
`;

export default Calendar;

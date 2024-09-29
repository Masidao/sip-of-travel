import React, { useRef, useEffect } from "react";
import * as S from "../../styles/calendar.style";
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
const totalMonths = 13; // 13개월 달력 구성. 변경 가능성 있음
const centerMonth = Math.floor(totalMonths / 2);

const Calendar: React.FC<CalendarProps> = ({
  currentDate,
  selectedDates,
  onDateClick,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);

  const months = Array.from({ length: totalMonths }, (_, i) =>
    addMonths(subMonths(currentDate, 6), i)
  );

  useEffect(() => {
    const currentMonth = calendarRef.current?.children[centerMonth] as HTMLElement;
    if (currentMonth && typeof currentMonth.scrollIntoView === "function") { // test에서 currentMonth?.scrollIntoView is not a function 오류
      currentMonth.scrollIntoView({ behavior: "instant", block: "center" });
    }
  }, []);

  const isDateInRange = (date: Date) =>
    isWithinInterval(date, {
      start: selectedDates[0],
      end: selectedDates[1],
    });

  const isStartDate = (date: Date) => isSameDay(date, selectedDates[0]);
  const isEndDate = (date: Date) => isSameDay(date, selectedDates[1]);

  const isWeekend = (date: Date) => {
    const dayOfWeek = getDay(date);
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <S.Container ref={calendarRef}>
      {months.map((month) => (
        <S.MonthContainer key={format(month, "yyyy-MM")}>
          <S.MonthHeader>{format(month, "yyyy년 MM월")}</S.MonthHeader>
          <S.WeekDays>
            {week.map((day) => (
              <S.WeekDay key={day}>{day}</S.WeekDay>
            ))}
          </S.WeekDays>
          <S.DaysGrid>
            {[...Array(getDay(startOfMonth(month))).keys()].map((num) => (
              <div key={num} />
            ))}
            {eachDayOfInterval({
              start: startOfMonth(month),
              end: endOfMonth(month),
            }).map((date) => (
              <S.Day
                key={format(date, "yy-MM-dd")}
                onClick={() => onDateClick(date)}
                $isInRange={isDateInRange(date)}
                $isStartDate={isStartDate(date)}
                $isEndDate={isEndDate(date)}
                $isWeekend={isWeekend(date)}
              >
                {format(date, "d")}
              </S.Day>
            ))}
          </S.DaysGrid>
        </S.MonthContainer>
      ))}
    </S.Container>
  );
};

export default Calendar;

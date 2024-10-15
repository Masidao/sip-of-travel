import styled from "styled-components";

export const Schedule = styled.div`
  padding: 2rem 1rem;
  font-size: 1.2rem;
  .day {
    font-size: 1.5rem;
  }
`;

export const Date = styled.div`
  color: #b0b0b0;
  font-size: 1.2rem;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ScheduleList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
`;

export const ScheduleItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 8px;
`;

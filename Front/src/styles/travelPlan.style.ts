import styled from "styled-components";
import { Header } from "./layout.style";

export const PlanHeader = styled(Header)`
  justify-content: space-around;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Map = styled.div`
  height: 300px;
  background-color: whitesmoke;
`;

export const Group = styled.div`
  display: flex;
`;

export const Schedules = styled.div`
  height: 400px;
  overflow-y: auto;
`;

export const ScheduleItem = styled.div`
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

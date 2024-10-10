import styled from "styled-components";
import { Header } from "./layout.style";

export const PlanHeader = styled(Header)`
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
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
  height: 500px;
  overflow-y: auto;
`;

export const ScheduleItem = styled.div`
  display: flex;
  gap: 10px;
  padding: 1rem;
  font-size: 1.2rem;
  .date {
    color: #e0e0e0;
  }
`;

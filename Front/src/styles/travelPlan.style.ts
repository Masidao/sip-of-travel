import styled from "styled-components";
import { Header } from "./layout.style";

export const PlanHeader = styled(Header)`
  justify-content: space-around;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const SubTitle = styled.div`
  color: #b0b0b0;
  font-size: 1.2rem;
`;

export const MapBox = styled.div`
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

import styled from "styled-components";

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

export const ScrollArea = styled.div`
  height: 75vh;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

export const ScheduleItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const ScheduleTitle = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 10px;
  color: black;
`;

export const ScheduleDate = styled.div`
  display: flex;
  align-items: center;
  color: #858585;
`;

export const Message = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: #858585;
  padding: 1rem;
`;

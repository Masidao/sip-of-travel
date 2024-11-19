import styled from "styled-components";
import { ScrollArea } from "./layout.style";

export const Places = styled(ScrollArea)`
  height: 68vh;
`;

export const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const ItemTitle = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 10px;
`;

export const ItemAddress = styled.div`
  font-size: 1rem;
  color: #b0b0b0;
`;

export const Message = styled.div`
  font-size: 1.5rem;
  color: #858585;
  height: inherit;
  text-align: center;
  align-content: center;
`;

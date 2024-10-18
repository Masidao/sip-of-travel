import styled from "styled-components";

export const Places = styled.div`
  height: 75vh;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

export const PlaceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemTitle = styled.div`
  font-size: 1.5rem;
`;

export const ItemCategory = styled.div`
  font-size: 1rem;
  color: #e0e0e0;
`;

export const Message = styled.div`
  font-size: 1.5rem;
  color: #858585;
  height: inherit;
  text-align: center;
  align-content: center;
`;

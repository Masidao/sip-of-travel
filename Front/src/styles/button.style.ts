import styled from "styled-components";

export const CommonButton = styled.button`
  width: 100%;
  padding: 1rem;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const AddButton = styled(CommonButton)`
  background-color: #0070f3;
`;

export const ToggleButton = styled(CommonButton)<{ disabled: boolean }>`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#0070f3")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const GroupButton = styled(CommonButton)`
  background-color: unset;
  color: black;
  gap: 10px;
  border: 1px solid #e0e0e0;
  margin: 1rem;
  padding: 0;
`;

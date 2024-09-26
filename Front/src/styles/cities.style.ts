import styled from "styled-components";

export const ScrollArea = styled.div`
  height: 75vh;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  &:last-child {
    margin-bottom: 50px;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover; // 왜곡 없애기
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
`;

export const SelectedCitiesArea = styled.div<{ $isempty: boolean }>`
  display: flex;
  visibility: ${({ $isempty }) => ($isempty ? "hidden" : "unset")};
  height: 100px;
  overflow-y: scroll;
  align-items: center;
  gap: 2.5rem;
  background-color: #e4f1ff;
  padding-left: 16px;
`;

export const SelectedCity = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  color: #ef4444;
  border: 1px solid;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

export const SelectedCityImage = styled(Image)``;

export const SelectedCityName = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

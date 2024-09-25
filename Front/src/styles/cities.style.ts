import styled from "styled-components";
import SearchIcon from "../assets/SearchIcon";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  outline: none;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  padding-right: 16px;
`;

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
  overflow: scroll;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: rgb(0 112 243 / 10%);
`;

export const SelectedCity = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #e0e0e0;
  color: white;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

export const SelectedCityImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

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

export const Button = styled.button<{ disabled: boolean }>`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#0070f3")};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;
`;

export const Footer = styled.footer`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const Header = styled.header`
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

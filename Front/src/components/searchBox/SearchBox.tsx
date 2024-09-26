import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/SearchIcon";

interface SearchBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <SearchBoxWrapper>
      <SearchInput
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <StyledSearchIcon />
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
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

const StyledSearchIcon = styled(SearchIcon)`
  padding-right: 16px;
`;

export default SearchBox;

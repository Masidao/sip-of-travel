import styled from "styled-components";
import { useState } from "react";

export interface ButtonProps {
  enable?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Button = ({
  enable = false,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const [isEnabled, setIsEnabled] = useState(enable);

  const handleClick = () => {
    setIsEnabled((prevState) => !prevState);
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <StyledButton
      $enable={isEnabled}
      backgroundColor={backgroundColor}
      onClick={handleClick}
      {...props}
    >
      선택
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $enable: boolean } & ButtonProps>`
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;
  color: ${(props) => (props.$enable ? "#fafafa" : "#333")};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.$enable
        ? "#1ea7fd"
        : "#fafafa"};
  box-shadow: ${(props) =>
    props.$enable ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"};
`;

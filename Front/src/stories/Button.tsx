import styled, { css } from "styled-components";

export interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  children: React.ReactNode;

  onClick?: () => void;
}

export const Button = ({
  primary = false,
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};


const ButtonStyles = css<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;

  ${(props) =>
    props.primary
      ? css`
          color: #fafafa;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: #fafafa;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}
`;

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyles}
`;

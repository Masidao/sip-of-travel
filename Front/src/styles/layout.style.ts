import styled from "styled-components";

const LayoutContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled(LayoutContainer)`
  justify-content: flex-end;
`;

export const Header = styled(LayoutContainer)`
  justify-content: center;
`;

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

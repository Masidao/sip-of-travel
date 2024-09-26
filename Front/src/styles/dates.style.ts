import styled from "styled-components";
import { Footer, Header } from "./layout.style";

export const DatesHeader = styled(Header)`
  justify-content: space-around;
  margin: 0;
  border-bottom: 2px solid #e0e0e0;
`;

export const DatesFooter = styled(Footer)`
  justify-content: unset;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const DatesArea = styled.div`
  height: 80vh;
  height: 75vh;
  overflow-y: auto;
  background-color: #f9f9f9;
  box-shadow: 0px 5px #f9f9f9;
`;

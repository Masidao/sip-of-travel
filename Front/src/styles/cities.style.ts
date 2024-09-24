import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
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

export const ScrollArea = styled.div`
  height: 60vh;
  overflow-y: auto;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.2rem;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #0070f3;
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

  &:hover {
    background-color: #0060df;
  }
`;

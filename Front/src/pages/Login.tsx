import React from "react";
import * as S from "../styles/login.style";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => navigate("/travel_plans");

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>! (^~^) !</S.Title>
        <S.Button onClick={handleLogin}>
          <img src="kakao_login.png" alt="kakao_login" />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;

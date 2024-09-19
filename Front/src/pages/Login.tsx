import React from "react";
import * as S from "../styles/login.style";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const navigate = useNavigate();
  // const handleLogin = () => navigate("/home");

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>! (^~^) !</S.Title>
        <S.Button>
          <img src="kakao_login.png" />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;

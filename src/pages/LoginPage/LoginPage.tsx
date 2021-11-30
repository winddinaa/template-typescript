import React from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "store/reducer/userSlice";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "components/GlobalComponens/GlobalComponent";
import styled from "styled-components";

const LoginPageContain = styled(PageContainer)`
  border: 2px solid lightgray;
  height: 400px;
  align-items: center;
  font-size: 26px;
`;

const LoginButton = styled.button`
  margin-left: 24px;
  padding: 0.5rem 0.2rem;
`;

const LoginPage = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUserInfo({ name: "Ppong", mobilePhone: "0801234567" }));
    navigator("/landing");
  };
  return (
    <LoginPageContain>
      LoginPage
      <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
    </LoginPageContain>
  );
};

export default LoginPage;

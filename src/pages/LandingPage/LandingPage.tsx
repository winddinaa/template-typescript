import React from "react";
import get from "lodash/get";
import { useSelector } from "react-redux";
import { RootState } from "store";
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
  margin: 1rem 0;
  padding: 0.5rem 0.2rem;
`;

const Div = styled.span`
  display: flex;
  flex-direction: column;
`;

const LandingPage = () => {
  const navigator = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  return (
    <LoginPageContain>
      <Div>
        LandingPage
        <Div>Welcome: {get(user, "userInfo.name", "unknown")}</Div>
        <LoginButton onClick={() => navigator("/")}>LandingPage</LoginButton>
      </Div>
    </LoginPageContain>
  );
};

export default LandingPage;

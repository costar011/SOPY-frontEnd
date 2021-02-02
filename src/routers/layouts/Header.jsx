import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ActionSpan = styled.span`
  padding: 5px;
  margin: 5px;
  color: ${(props) => props.theme.whiteColor};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${(props) => props.theme.pointColor};
  }
`;

const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const [login, setLogin] = useState(sessionStorage.getItem("TDKVIZ@AIVZ"));
  console.log(login);

  useEffect(() => {
    setLogin(sessionStorage.getItem("TDKVIZ@AIVZ"));
  }, []);

  return (
    <HeaderWrapper>
      <InnerWrapper width={`200px`}></InnerWrapper>
      <ActionSpan
        onClick={() => {
          moveLinkHandler("/");
        }}
      >
        LOGO
      </ActionSpan>

      {login !== null ? (
        <InnerWrapper width={`200px`}>
          <ActionSpan
            onClick={() => {
              moveLinkHandler("/signIn");
            }}
          >
            MyVideo
          </ActionSpan>
          <ActionSpan
            onClick={() => {
              moveLinkHandler("/signUp");
            }}
          >
            Upload
          </ActionSpan>
        </InnerWrapper>
      ) : (
        <InnerWrapper width={`200px`}>
          <ActionSpan
            onClick={() => {
              moveLinkHandler("/signIn");
            }}
          >
            SIGN IN
          </ActionSpan>
          <ActionSpan
            onClick={() => {
              moveLinkHandler("/signUp");
            }}
          >
            SIGN UP
          </ActionSpan>
        </InnerWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";

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

const Header = () => {
  return (
    <HeaderWrapper>
      <InnerWrapper width={`200px`}></InnerWrapper>
      <InnerWrapper>LOGO</InnerWrapper>
      <InnerWrapper width={`200px`}>SING IN / UP</InnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;

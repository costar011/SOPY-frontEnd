import React from "react";
import {
  Wrapper,
  ImageBox,
  CommonBtn,
} from "../../components/commonComponents";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const BarWrapper = styled.div`
  width: 1350px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const MM02Presenter = () => {
  return (
    <Wrapper>
      <Fade bottom>
        <Wrapper>Video Upload</Wrapper>
      </Fade>
    </Wrapper>
  );
};

export default MM02Presenter;

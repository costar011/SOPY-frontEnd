import React from "react";
import {
  Wrapper,
  ImageBox,
  CommonBtn,
} from "../../components/commonComponents";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const MM02Presenter = () => {
  return (
    <Wrapper>
      <Fade bottom>
        <Wrapper padding={`10px`} dr={`row`}>
          Video Upload
        </Wrapper>
      </Fade>
      <Fade>
        <ImageBox
          width={`400px`}
          height={`200px`}
          margin={`8px`}
          bgImg={`https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
        />
      </Fade>
    </Wrapper>
  );
};

export default MM02Presenter;

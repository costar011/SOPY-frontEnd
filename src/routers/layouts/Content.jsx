import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MM00 from "../MM00";
import MM02 from "../MM02";
import MM04 from "../MM04";
import MM05 from "../MM05";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/video/upload" component={MM02} />
      <Route exact path="/signIn" component={MM04} />
      <Route exact path="/signUp" component={MM05} />
    </WholeWrapper>
  );
};

export default Content;

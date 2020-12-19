import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextInput = styled.div`
  width: 450px;
  height: 35px;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 0px 15px;
  outline: none;
  border: 2px solid ${(props) => props.theme.greyColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const Title = styled.h2`
  font-size: 27px;
  font-weight: 700px;
  margin: 0px 0px 40px 0px;
`;

const Button = styled.button`
  width: 250px;
  height: 30px;
  border-radius: ${(props) => props.theme.radios};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.checkColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
  margin: 20px 0px 50px 0px;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 2px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const MM05Presenter = () => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>SING UP</Title>
      </Typist>

      <TextInput type="text" />
      <TextInput type="text" />
      <TextInput type="text" />
      <TextInput type="text" />
      <TextInput type="text" />
      <TextInput type="text" />
      <TextInput type="text" />
    </Wrapper>
  );
};

export default MM05Presenter;

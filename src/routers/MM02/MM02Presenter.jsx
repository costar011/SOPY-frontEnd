import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import { CommonBtn } from "../../components/commonComponents";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin: 0px 0px 40px 0px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextInput = styled.input`
  width: 600px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  margin: 15px 0px;
  transition: 0.5s;
  padding: 0px 10px;

  &:focus {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 30px;

  line-height: 25px;
  background-color: ${(props) => props.theme.checkColor};

  color: #fff;

  box-shadow: ${(props) => props.theme.boxShadow};

  border-radius: ${(props) => props.theme.radius};
  text-align: center;
  cursor: pointer;
`;

const MM02Presenter = (fileChangeHandler) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Upload Video</Title>
      </Typist>

      <Text>
        <TextInput placeholder="title" />
        <TextInput placeholder="description" />
      </Text>

      <CommonBtn isCreate={true}>UPLOAD</CommonBtn>
      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
      <FileLabel htmlFor="file-js">파일선택</FileLabel>
    </Wrapper>
  );
};

export default MM02Presenter;

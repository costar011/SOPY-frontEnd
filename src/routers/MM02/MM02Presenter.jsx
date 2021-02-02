import React from "react";
import { Wrapper } from "../../components/commonComponents";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
  text-align: center;
  cursor: pointer;
`;

const TextInput = styled.input`
  width: 640px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 0px 10px;

  &:focus {
    box-shadow: 2px 3px 2px #999;
  }
`;

const TextArea = styled.textarea`
  width: 640px;
  height: 300px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0px;
  transition: 0.5s;
  padding: 10px;
  resize: none;

  &:focus {
    box-shadow: 2px 3px 2px #999;
  }
`;

const MM02Presenter = (fileChangeHandler) => {
  return (
    <Wrapper>
      <Fade bottom>
        <Wrapper padding={`10px`} dr={`row`}>
          Video Upload
        </Wrapper>
      </Fade>
      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />

      <TextInput readOnly={true} />
      <TextArea readOnly={true} />

      <FileLabel htmlFor="file-js">썸네일</FileLabel>
    </Wrapper>
  );
};

export default MM02Presenter;

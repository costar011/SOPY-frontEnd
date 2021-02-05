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

const FileInput = styled.input`
  display: none;
`;

const UploadImg = styled.img`
  width: 400px;
  height: 400px;

  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;

  &:before {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 5px;
  }
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: ${(props) => props.height || `40px`};

  border-radius: 10px;
  margin: 10px 0px 20px 40px;

  padding: 15px;

  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #777;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 35px;
`;

const UnderWrapper = styled.div`
  width: 85%;

  display: flex;
  flex-direction: row;
  margin: 20px 0px 0px 50px;
`;

const RightWrapper = styled.div`
  width: 35%;
`;

const LeftWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
`;

const MM02Presenter = ({ fileChangeHandler, imagePath }) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Upload Video</Title>
      </Typist>

      <UnderWrapper>
        <LeftWrapper>
          <TextInput placeholder="title" />
          <TextInput placeholder="description" height="340px" />
        </LeftWrapper>

        <RightWrapper>
          <UploadImg src={imagePath} />
          <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
          <CommonBtn htmlFor="file-js">파일선택</CommonBtn>
        </RightWrapper>
      </UnderWrapper>
    </Wrapper>
  );
};

export default MM02Presenter;

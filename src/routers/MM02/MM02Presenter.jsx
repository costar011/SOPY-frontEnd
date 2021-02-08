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

const RowWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightupWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightdownWrapper = styled.div`
  width: 65%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  /* width: 120px;
  height: 25px;
  line-height: 25px;
  background-color: ${(props) => props.theme.checkColor};
  color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
  text-align: center; */
  cursor: pointer;
`;

const Image = styled.img`
  width: 450px;
  height: 450px;
  margin: 0px 10px;
  border-radius: 5px;
  object-fit: cover;

  &:before {
    content: "Choose the Video";
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    width: 450px;
    height: 450px;
    background-color: #e7e7e7;
    border: 2px dotted #777;
    color: #666666;
    border-radius: 5px;
  }
`;

const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: ${(props) => props.height || `40px`};
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 0px 10px;
  outline: none;
  border: 1px solid ${(props) => props.theme.greyColor};
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
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.checkColor};
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const MM02Presenter = ({
  videoDatum,
  fileChangeHandler,
  imagePath,
  newTitle,
  newDesc,
  registerHandler,
}) => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      >
        <Title>Upload Video</Title>
      </Typist>
      <RowWrapper>
        <LeftWrapper>
          <FileLabel htmlFor="file-js">
            <Image src={imagePath} />
          </FileLabel>
          <FileInput
            type="file"
            id="file-js"
            onChange={fileChangeHandler}
            accept=".png, .jpg, .jpeg"
          />
        </LeftWrapper>
        <RightWrapper>
          <RightupWrapper>
            <TextInput placeholder="title" {...newTitle} />
            <TextInput placeholder="description" height="350px" {...newDesc} />
          </RightupWrapper>
          <RightdownWrapper>
            <CommonBtn isCreate={true} onClick={registerHandler}>
              저장하기
            </CommonBtn>
          </RightdownWrapper>
        </RightWrapper>
      </RowWrapper>
    </Wrapper>
  );
};

export default MM02Presenter;

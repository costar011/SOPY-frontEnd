import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponent";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const ViewText = styled.div`
  margin: 6px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isAuthor ? props.theme.whiteColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.greyColor : ``)};
`;

const BarWrapper = styled.div`
  width: 1350px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

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

const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 2px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const MM00Presenter = ({ videoDatum, fileChangeHandler, imagePath }) => {
  return (
    <Wrapper>
      <Wrapper hidden={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={`https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
            />
          </Wrapper>
        </Fade>

        <Fade right>
          <Wrapper al={`flex-start`} padding={`20px`}>
            <ViewText size={`20px`} weight={`700`} isTitle={true}>
              Text 1
            </ViewText>
            <ViewText size={`12px`} weight={`400`} isTitle={true}>
              Text 2
            </ViewText>
            <ViewText size={`13.5px`} weight={`500`} isTitle={true}>
              Text 3
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>
      <Wrapper>
        <Bounce>
          <BarWrapper />
        </Bounce>

        <Fade bottom>
          <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
            {videoDatum ? (
              videoDatum.length === 0 ? (
                <Wrapper>미디어 목록 없음</Wrapper>
              ) : (
                videoDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <ImageBox
                        width={`320px`}
                        height={`180px`}
                        margin={`5px`}
                        bgImg={data.thumbnailPath}
                      />
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회중 . . . </Wrapper>
            )}
          </WrapWrapper>
        </Fade>
      </Wrapper>
      {/*flie uploadtest */}
      <Image src={imagePath} />
      <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
      <FileLabel htmlFor="file-js">파일선택</FileLabel>
    </Wrapper>
  );
};

export default MM00Presenter;

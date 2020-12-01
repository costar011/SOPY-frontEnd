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
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const MM00Presenter = () => {
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
              민기의 피자토스트 만드는 방법
            </ViewText>
            <ViewText size={`12px`} weight={`400`} isTitle={true}>
              민기
            </ViewText>
            <ViewText size={`13.5px`} weight={`500`} isTitle={true}>
              만듀만듀만듀만듀만듀
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
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
            />
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`}
            />
          </WrapWrapper>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;

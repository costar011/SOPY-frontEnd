import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
`;

export const ImageBox = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

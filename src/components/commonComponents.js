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
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    opacity: 0.8;
  }
`;

export const CommonBtn = styled.button`
  width: ${(props) => props.width || `120px`};
  height: ${(props) => props.height || `30px`};

  outline: none;
  border: none;

  background-color: ${(props) =>
    props.isCreate
      ? props.theme.mainThemeColor
      : props.isRead
      ? props.theme.checkColor
      : props.isUpdate
      ? props.theme.pointColor
      : props.isDelete
      ? props.theme.errorColor
      : props.theme.mainThemeColor};

  color: ${(props) => props.theme.whiteColor};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.boxShadow};

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.mainThemeColor};
    color: ${(props) => props.theme.mainThemeColor};

    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: ${(props) => props.dr || `colum`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
`;

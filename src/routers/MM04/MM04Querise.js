import { gql } from "apollo-boost";

export const TRY_LOGIN = gql`
  mutation tryLogin($email: String!) {
    tryLogin(email: $email)
  }
`;

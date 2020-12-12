import { gql } from "apollo-boost";

// 왜 대문자로 하느냐 ? 상수임
export const GET_ALL_VIDEOS = gql`
  query getAllvideos {
    getAllvideos {
      _id
      title
      description
      thumbnailPath
    }
  }
`;

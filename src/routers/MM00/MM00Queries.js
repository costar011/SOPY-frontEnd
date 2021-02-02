import { gql } from "apollo-boost";

export const GET_ALL_VIDEOS = gql`
  query getAllVideos {
    getAllVideos {
      _id
      title
      description
      thumbnailPath
    }
  }
`;
//상수(변하지 않는 수)라 대문자로 표기할 것임

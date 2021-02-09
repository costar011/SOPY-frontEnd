import { gql } from "apollo-boost";

export const GET_VIDEO_ONE = gql`
  query getVideoOne($id: String!) {
    getVideoOne(id: $id) {
      _id
      thumbnailPath
      title
      description
    }
  }
`;

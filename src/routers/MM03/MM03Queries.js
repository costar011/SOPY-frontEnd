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

export const UPDATE_VIDEO_ONE = gql`
  mutation updateVideoOne(
    $id: String!
    $path: String!
    $title: String!
    $desc: String!
  ) {
    updateVideoOne(id: $id, path: $path, title: $title, desc: $desc)
  }
`;

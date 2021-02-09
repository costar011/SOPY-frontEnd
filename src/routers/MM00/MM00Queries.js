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

export const DELETE_VIDEO = gql`
  mutation deleteVideo($id: String!) {
    deleteVideo(id: $id)
  }
`;

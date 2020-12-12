import React from "react";
import { useQuery } from "react-apollo-hooks";
import MM00Presenter from "./MM00Presenter";
import { GET_ALL_VIDEOS } from "./MM00Querise";

const MM00Container = () => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////
  /// { data, loading, refetch }
  const {
    data: videoDatum,
    loading: videoLoding,
    refetch: videoRefetch,
  } = useQuery(GET_ALL_VIDEOS);

  console.log(videoDatum && videoDatum.getAllVideos);

  ////////   USE MUTATION ////////

  ////////   USE EFFECT   ////////

  return <MM00Presenter videoDatum={videoDatum && videoDatum.getAllvideos} />;
};
export default MM00Container;

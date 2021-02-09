import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import MM00Presenter from "./MM00Presenter";
import { DELETE_VIDEO, GET_ALL_VIDEOS } from "./MM00Queries";
import storageRef from "../../firebase";

const MM00Container = ({ history }) => {
  ////////// VARIABLE     ////////

  ////////// USE STATE    ////////
  const [imagePath, setImagePath] = useState(``);

  ////////// USE REF      ////////

  ////////// USE CONTEXT  ////////

  ////////// USE QUERY    ////////
  const {
    data: videoDatum,
    loading: videoLoading,
    refetch: videoRefetch,
  } = useQuery(GET_ALL_VIDEOS);

  ////////// USE MUTATION ////////

  const [deleteVideoMutation] = useMutation(DELETE_VIDEO);

  ////////// USE EFFECT   ////////
  useEffect(() => {
    videoRefetch();
  }, []);

  const fileChangeHandler = async (e) => {
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `SOPY/uploads/thumbnail/${uploadFileName}`
      );

      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {}
  };

  const videoDeleteHandler = async (id) => {
    const { data } = await deleteVideoMutation({
      variables: {
        id,
      },
    });

    if (data.deleteVideo) {
      alert("비디오가 삭제됨");
      videoRefetch();
    } else {
      alert("비디오 삭제 실패함");
    }
  };

  const updateHandler = (id) => {
    history.push(`/video/edit/${id}`);
  };

  return (
    <MM00Presenter
      videoDatum={videoDatum && videoDatum.getAllVideos}
      fileChangeHandler={fileChangeHandler}
      imagePath={imagePath}
      videoDeleteHandler={videoDeleteHandler}
      updateHandler={updateHandler}
    />
  );
};

export default MM00Container;

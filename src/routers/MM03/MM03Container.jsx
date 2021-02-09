import React, { useState } from "react";
import { useQuery } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import MM03Presenter from "./MM03Presenter";
import { GET_VIDEO_ONE } from "./MM03Queries";

const MM03Container = ({ match }) => {
  //////////// VARIABLE  ////////////////////
  const videoId = match.params.id;

  console.log(videoId);

  //////////// USE STATE  ///////////////////
  const editThumbnail = useInput(``);
  const editTitle = useInput(``);
  const editDesc = useInput(``);

  const [dataFlag, setDataFlag] = useState(true);

  //////////// USE REF  /////////////////////

  //////////// USE CONTEXT  /////////////////

  ////////////// USE QUERY  /////////////////
  const { data: vData, loading: vLoading, refetch: vRefetch } = useQuery(
    GET_VIDEO_ONE,
    {
      variables: {
        id: videoId,
      },
    }
  );

  if (!vLoading) {
    if (dataFlag) {
      editThumbnail.setValue(vData.getVideoOne.thumbnailPath);
      editTitle.setValue(vData.getVideoOne.title);
      editDesc.setValue(vData.getVideoOne.description);

      setDataFlag(false);
    }
  }
  //////////// USE MUTATION  ////////////////

  ///////////// USE EFFECT  /////////////////
  const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);

    const D = new Date();
    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    /* date : 날짜 day : 요일 */
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
    } catch (e) {
      /*여기는 프론트이므로 콘솔로그 에러는 찍으면 사용자에게 에러가 나오므로 적지 말아야 함! */
    }

  return (
    <MM03Presenter
      editThumbnail={editThumbnail}
      editTitle={editTitle}
      editDesc={editDesc}
      fileChangeHandler={fileChangeHandler}
    />
  );
};

export default MM03Container;

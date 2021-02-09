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

  return (
    <MM03Presenter
      editThumbnail={editThumbnail}
      editTitle={editTitle}
      editDesc={editDesc}
    />
  );
};

export default MM03Container;

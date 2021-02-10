import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import MM02Presenter from "./MM02Presenter";
import storageRef from "../../firebase";
import useInput from "../../Hooks/useInput";
import { REGIST_VIDEO } from "./MM02Queries";

const MM02Container = ({ history }) => {
  //////////// VARIABLE  ////////////////////

  //////////// USE STATE  ///////////////////
  const [imagePath, setImagePath] = useState(``);

  const newTitle = useInput(``);
  const newDesc = useInput(``);

  //////////// USE REF  /////////////////////

  //////////// USE CONTEXT  /////////////////

  ////////////// USE QUERY  /////////////////

  //////////// USE MUTATION  ////////////////

  const [registerVideoMutation] = useMutation(REGIST_VIDEO);

  ///////////// USE EFFECT  /////////////////
  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
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
  };

  const registerHandler = async () => {
    const { data } = await registerVideoMutation({
      variables: {
        path: imagePath,
        title: newTitle.value,
        desc: newDesc.value,
      },
    });

    if (data.registerVideo) {
      alert("Upload Success");
      history.push("/");
    } else {
      alert("Upload Fail");
    }
  };

  return (
    <MM02Presenter
      fileChangeHandler={fileChangeHandler}
      imagePath={imagePath}
      newTitle={newTitle}
      newDesc={newDesc}
      registerHandler={registerHandler}
    />
  );
};

export default MM02Container;

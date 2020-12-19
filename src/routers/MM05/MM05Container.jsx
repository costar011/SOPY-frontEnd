import React from "react";
import useInput from "../../Hooks/useinput";
import MM05Presenter from "./MM05Presenter";

const MM05Container = () => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////
  const newName = useInput("");
  const newEmail = useInput("");
  const newMobile = useInput("");
  const newNickName = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////

  ////////   USE MUTATION ////////

  ////////   USE EFFECT   ////////

  return (
    <MM05Presenter
      newName={newName}
      newEmail={newEmail}
      newMobile={newMobile}
      newNickName={newNickName}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
    />
  );
};
export default MM05Container;

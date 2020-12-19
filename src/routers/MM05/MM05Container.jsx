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

  ////////   USE HANDLER   ////////
  const registUserHandler = () => {
    console.log(newName.value);
    console.log(newEmail.value);
    console.log(newMobile.value);
    console.log(newNickName.value);
    console.log(newZoneCode.value);
    console.log(newAddress.value);
    console.log(newDetailAddress.value);
  };

  const searchPostHandelr = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      },
    }).open();
  };

  return (
    <MM05Presenter
      // useInput
      newName={newName}
      newEmail={newEmail}
      newMobile={newMobile}
      newNickName={newNickName}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      // handler
      registUserHandler={registUserHandler}
      searchPostHandelr={searchPostHandelr}
    />
  );
};
export default MM05Container;

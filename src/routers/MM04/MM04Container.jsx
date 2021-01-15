import React, { useState } from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../hooks/useInput";
import { TRY_LOGIN, CHECK_SECRET_CODE } from "./MM04Queries";
import { useMutation } from "react-apollo-hooks";

const MM04Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const inputEmail = useInput("");
  const [tab, setTab] = useState(0);
  const assignment = useInput("");

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);

  ///////////////////// - USE EFFECT - ////////////////////////

  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
    } else {
      alert("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode.result) {
      alert("로그인 성공 !!");
      sessionStorage.setItem("JDJE!@dkfsjns", data.checkSecretCode.objectId);
      history.push("/");

      window.location.reload(); // 새로고침하여 1차적으로 버그 고침
    } else {
      alert("인증코드가 잘못되었습니다.");
    }
  };

  // 사용자 데이터를 JWT TOKEN으로 생성하여 가져온다.
  // 크롬에서 PASSPORT TOKEN을 통해 session에 토큰을 저장하고,
  // 모든 화면에서는 login 상태를 알기 위한 redux || contextAPI를
  // 세팅하여 로그인 상태를 유지하기 위한 처리를 한다.

  return (
    <MM04Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
      tab={tab}
      assignment={assignment}
      assignmentCheckHandler={assignmentCheckHandler}
    />
  );
};

export default MM04Container;

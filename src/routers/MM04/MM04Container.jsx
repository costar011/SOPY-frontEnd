import React from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../Hooks/useinput";
import { TRY_LOGIN } from "./MM04Querise";
import { useMutation } from "react-apollo-hooks";

const MM04Container = () => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////
  const inputEmail = useInput(``);

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////

  ////////   USE MUTATION ////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);

  ////////   USE EFFECT   ////////
  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    console.log(data);
  };

  return (
    <MM04Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
    />
  );
};
export default MM04Container;

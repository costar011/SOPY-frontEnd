import React from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../Hooks/useInput";
import { TRY_LOGIN } from "./MM04Queries";
import { useMutation } from "react-apollo-hooks";

const MM04Container = () => {
  ////////// VARIABLE     //////////

  ////////// USE SATETE   //////////
  const inputEmail = useInput("");

  ////////// USE REF      //////////

  ////////// USE CONTEXT  //////////

  ////////// USE QUERY    //////////

  ////////// USE MUTATION //////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);

  ////////// USE EFFECT   //////////

  const loginClickHandler = async () => {
    console.log(inputEmail.value);

    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });
  };

  return (
    <MM04Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
    ></MM04Presenter>
  );
};

export default MM04Container;

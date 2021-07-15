import React, { useEffect, useState } from "react";
import { userLogin } from "./AuthService";
import AuthLoginForm from "./AuthLoginForm";
import AuthCheck from "./AuthCheck";
//import { Redirect } from "react-router-dom";

export const AuthLogin = () => {
  const [existUser, setExistUser] = useState({
    email: "",
    password: ""
  });

  const [log, setLog] = useState(false);

  useEffect(() => {
    if (existUser && log) {
      userLogin(existUser).then((userExists) => {
        if (userExists) {
          AuthCheck.authenticate();
        }
        // TODO: redirect user to main app
        setLog(false);
      });
    }
  }, [existUser, log]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setExistUser({
      ...existUser,
      [name]: newValue
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    setLog(true);
  };

  return (
    <div>
      <AuthLoginForm
        user={existUser}
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      />
    </div>
  );
};

export default AuthLogin;

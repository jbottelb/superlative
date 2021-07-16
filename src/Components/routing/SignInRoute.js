import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";

export default function SignInRoute({ component: Component, ...rest }) {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Redirect to="/" /> : <Component {...props} />;
      }}
    ></Route>
  );
}

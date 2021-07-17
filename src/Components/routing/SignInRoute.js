import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";

// a sign in route is an auth component
// make sure these are not accessable by a loged in user
export default function SignInRoute({ component: Component, ...rest }) {
  const { user } = useContext(UserContext);

  // if there is no user, deny entry
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Redirect to="/" /> : <Component {...props} />;
      }}
    ></Route>
  );
}

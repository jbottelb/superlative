import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";

// these routes require signed in users
export default function PrivateRoute({ component: Component, ...rest }) {
  const { user } = useContext(UserContext);

  // if there is a user, allow entry
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

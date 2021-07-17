import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/authContext";

export default function LogOut() {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  setUser("");
  alert("You have been logged out!");
  history.push("/");
  return <div />;
}

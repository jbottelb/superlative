import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";

// This will let users see the forms they have created
// and check the status of them
export default function View() {
  const { user } = useContext(UserContext);

  // get all forms created by that user
  return <p>viewer for {user}</p>;
}

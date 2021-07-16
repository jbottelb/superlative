import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";

// Simple about page. Will contain more info later
const view = () => {
  const { user, setUser } = useContext(UserContext);
  return <p>viewer for {user}</p>;
};

export default view;

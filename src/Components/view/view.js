import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/authContext";

// Simple about page. Will contain more info later
export default function View() {
  const { user } = useContext(UserContext);
  return <p>viewer for {user}</p>;
}

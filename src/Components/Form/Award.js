import React from "react";
import { Candidate } from "./candidate.js";

// creates a selector for each award
// (Parent of Canditate)
const Award = ({ name, options }) => {
  return (
    <select name={name} id={name} form="userform">
      {options.map((candidate) => (
        <Candidate name={candidate.name} />
      ))}
    </select>
  );
};

export default Award;

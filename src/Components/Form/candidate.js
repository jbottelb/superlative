import React from "react";

// creates a selector for each candidate
const Candidate = ({ name }) => {
  return <option value={name}>{name}</option>;
};

export default Candidate;

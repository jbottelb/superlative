import React from "react";
import { useParams } from "react-router-dom";

const Vote = ({ name }) => {
  const params = useParams();
  return <p>Put the thing here: {params["id"]}</p>;
};

export default Vote;

import React from "react";
import { useParams } from "react-router-dom";

// Makes the user put in the key, select their name,
// and let's them vote for all the awards in the form
const Vote = () => {
  const params = useParams();
  return <p>Put the thing here: {params["id"]}</p>;
};

export default Vote;

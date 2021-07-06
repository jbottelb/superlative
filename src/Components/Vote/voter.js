import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetForm } from "../../Services/ParseModels.js";

// Makes the user put in the key, select their name,
// and let's them vote for all the awards in the form
const Vote = () => {
  const params = useParams();
  const formId = params["id"];

  const [forms, setForms] = useState([]);

  // get the form
  useEffect(() => {
    GetForm(formId).then((forms) => {
      console.log(forms);
      setForms(forms);
    });
  }, []);

  // diplay the form

  return (
    <div>
      <p>text</p>
    </div>
  );
};

export default Vote;

import React, { useEffect, useState, useContext } from "react";
import { getForms } from "../../Services/ParseModels.js";
import { UserContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

const View = () => {
  const [forms, setForms] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getForms(user).then((forms) => {
      setForms(forms);
    });
  }, []);

  return (
    <div>
      <h2>Superlative Forms for {user}</h2>

      {forms.length > 0 &&
        forms.map((form) => (
          <div>
            <Link to={"/view/" + form}>form</Link>
          </div>
        ))}
    </div>
  );
};

export default View;

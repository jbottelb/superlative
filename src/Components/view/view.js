import React, { useEffect, useState, useContext } from "react";
import { getForms } from "../../Services/ParseModels.js";
import { UserContext } from "../../contexts/authContext";
import { Link } from "react-router-dom";

// Shows a logged in user the forms they have created and lets them inspect them
const View = () => {
  const [forms, setForms] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getForms(user).then((forms) => {
      setForms(forms);
    });
  }, [user]);

  return (
    <div>
      <h2>Superlative Forms for {user}</h2>
      <div class="viewbox">
        {forms.length > 0 &&
          forms.map((form) => (
            <div class="viewitem">
              <Link to={"/view/" + form}>{form}</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default View;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetForm } from "../../Services/ParseModels.js";

// Makes the user put in the key, select their name,
// and let's them vote for all the awards in the form
const Voter = () => {
  const params = useParams();
  const formId = params["id"];

  const [forms, setForms] = useState([]);

  // get the form NOTE: results are a list of matches
  useEffect(() => {
    GetForm(formId).then((forms) => {
      console.log(forms[0].toJSON());
      setForms(forms);
    });
  });

  // there was an error doing this idk
  // <Award name={award.award} options={award.candidates} />

  return (
    <div>
      <form id="vote">
        {forms.length > 0 &&
          forms[0].toJSON().data.map((award) => (
            <div>
              <p>Award Title:{award.award}</p>
              <select name={award.award} id={award.award} form="userform">
                {award.candidates.map((candidate) => (
                  <option value={candidate.name}>{candidate.name}</option>
                ))}
              </select>
            </div>
          ))}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Voter;

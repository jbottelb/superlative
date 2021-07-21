import React, { useEffect, useState } from "react";
import { GetForm } from "../../Services/ParseModels.js";
import { useParams } from "react-router-dom";

/*
This route is protected by typing route even if signed in by another user
*/

// views a form by a passed name parameter
const ViewForm = () => {
  const params = useParams();
  const groupName = params["groupName"];
  const [form, setForm] = useState([]);

  // get form to fisplay by name
  useEffect(() => {
    GetForm(groupName).then((forms) => {
      setForm(forms[0].toJSON());
      console.log(form);
    });
  }, []);

  return (
    <div>
      <h2>Form Name: {groupName}</h2>
      <ul>
        {form.data &&
          form.data.map((award) => (
            <div key={award.award}>
              <span key={award.award}>
                <li key={award.award}>
                  {award.award}
                  <ul>
                    {award.candidates.map((candidate) => (
                      <li key={candidate.name}>
                        {candidate.name}, {candidate.votes}
                      </li>
                    ))}
                  </ul>
                </li>
              </span>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ViewForm;

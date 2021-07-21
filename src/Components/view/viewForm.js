import React, { useEffect, useState } from "react";
import { GetForm } from "../../Services/ParseModels.js";
import { useParams } from "react-router-dom";

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
      <h2>Form: {groupName}</h2>
      <ol>
        {form.data &&
          form.data.map((award) => (
            <div key={award.award}>
              <span key={award.award}>
                <li key={award.award}>
                  Award Title: {award.award}
                  <ol>
                    {award.candidates.map((candidate) => (
                      <li key={candidate.name}>
                        {candidate.name} {candidate.votes}
                      </li>
                    ))}
                  </ol>
                </li>
              </span>
            </div>
          ))}
      </ol>
    </div>
  );
};

export default ViewForm;

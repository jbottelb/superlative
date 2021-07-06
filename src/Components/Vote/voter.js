import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetForm } from "../../Services/ParseModels.js";

// Makes the user put in the key, select their name,
// and let's them vote for all the awards in the form
const Voter = () => {
  const params = useParams();
  const formId = params["id"];

  const [forms, setForms] = useState([]);
  const [name, setName] = useState();

  // get the form NOTE: results are a list of matches
  useEffect(() => {
    GetForm(formId).then((forms) => {
      // console.log(forms[0].toJSON());
      setForms(forms);
    });
  }, []); // IK this is a "Problem" but IDK the solution

  // handle selection changes
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating name to be added on submit
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    // Trigger add flag to create lesson and
    // re-render list with new lesson
    console.log("No errors");
  };

  // there was an error doing this idk
  // <Award name={award.award} options={award.candidates} />

  return (
    <div>
      <form id="vote">
        {forms.length > 0 &&
          forms[0].toJSON().data.map((award) => (
            <div>
              <span>
                <li key={award.award}>
                  Award Title:{award.award}
                  <br />
                  <select
                    id={award.award}
                    form="userform"
                    onChange={onChangeHandler}
                  >
                    {award.candidates.map((candidate) => (
                      <option value={candidate.name} key={candidate.name}>
                        {candidate.name}
                      </option>
                    ))}
                  </select>
                </li>
              </span>
            </div>
          ))}
        <input type="submit" onSubmit={onSubmitHandler} />
      </form>
    </div>
  );
};

export default Voter;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetForm, vote } from "../../Services/ParseModels.js";

// Makes the user put in the key, select their name,
// and let's them vote for all the awards in the form
const Voter = () => {
  const params = useParams();
  const formId = params["id"];

  const [forms, setForms] = useState([]);
  const [name, setName] = useState();

  // this will hold all the current votes on a candidate
  const [options, setOptions] = useState([]);

  // get the form NOTE: results are a list of matches
  useEffect(() => {
    GetForm(formId).then((forms) => {
      // set data of choices about the awards
      // o is the tempory object we use to build, before setting object
      const o = {};
      const data = forms[0].toJSON().data;

      // adds an award to the o
      function addElement(item) {
        o[item.award] = item.candidates[0].name;
      }
      data.forEach(addElement);

      // set the inital vote options
      setOptions(o);

      // set the data for components
      setForms(forms);
    });
  }, []); // this adds a warning

  // handle selection changes
  const onChangeHandler = (e) => {
    e.preventDefault();

    // change the object award name to the new selected
    const o = options;
    o[e.target.id] = e.target.value;

    // make sure the selector changes too
    setName(e.target.value);
  };

  // post voting (not yet implimented)
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // send the vote to the db
    vote(formId, options);

    alert("Vote submitted");
  };

  // For some reason, it needs a key and IDK why

  return (
    <div>
      <form id="vote" onSubmit={onSubmitHandler}>
        {forms.length > 0 &&
          forms[0].toJSON().data.map((award) => (
            <div key={award.award}>
              <span key={award.award}>
                <li key={award.award}>
                  Award Title: {award.award}
                  <br />
                  <select
                    id={award.award}
                    form="userform"
                    onChange={onChangeHandler}
                  >
                    {award.candidates.map((candidate) => (
                      <option value={candidate.name}>{candidate.name}</option>
                    ))}
                  </select>
                </li>
              </span>
            </div>
          ))}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Voter;

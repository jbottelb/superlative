import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/authContext";
import { getForms } from "../../Services/ParseModels";

// This will let users see the forms they have created
// and check the status of them
const View = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    getForms(user).then((forms) => {
      console.log(forms);
    });
  }, []);

  // get all forms created by that user
  return <h1>Your created Groups</h1>;
};

export default View;

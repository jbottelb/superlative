import React, { useEffect, useState } from "react";
import { GetForm } from "../../Services/ParseModels.js";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const params = useParams();
  const groupName = params["groupName"];
  const [form, setForm] = useState([]);

  useEffect(() => {
    GetForm(groupName).then((forms) => {
      setForm(forms[0].toJSON());
    });
  }, []);

  return (
    <div>
      <h2>Form name: {groupName}</h2>
    </div>
  );
};

export default ViewForm;

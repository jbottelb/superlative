import React from "react";

// Home sweet home
const Home = () => {
  return (
    <div>
      <h1> Project Status </h1>
      <p>
        Feature 5 is being reworked. Right now, users can sign up. View and
        Create are both protected routes.
      </p>
      <p>Log in is currently buggy. </p>
      <h2>TODO</h2>
      <ul>
        <li>Add voting functionality (Connect from to update)</li>
        <li>Let users view the forms they have created</li>
        <li>Add styling</li>
        <li>Authentification for creating forms and viewing</li>
        <li>Make home page an acutal home page, not a todo</li>
        <li>Write an about page</li>
      </ul>
    </div>
  );
};

export default Home;

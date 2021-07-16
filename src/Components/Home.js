import React from "react";

// Home sweet home
const Home = () => {
  return (
    <div>
      <h1> Project Status </h1>
      <p>Feature 5 is being reworked. Right now, users can sign up.</p>
      <p>
        The goal is to get a basic sign up service going, and then to have users
        in back4app to be regestered with emails and own a list of the forms
        they have created. Then I can use the current logged in user deal to add
        to thier list of forms they have filled out. Then on a view forms page,
        they can select from the forms they have created to see who is winning
        what and such.
      </p>
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

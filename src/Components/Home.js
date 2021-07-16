import React from "react";

// Home sweet home
const Home = () => {
  return (
    <div>
      <h1> Project Status </h1>
      <p>Feature 5 is implimented. This is version 0.3.0.</p>
      <p>
        Sign Up and login function. Logged in users can't access auth, not
        logged in cannot access create or view (redirected to auth). Routes are
        protected (Typing urls wont evade log in). Auth methods in
        Services/UserModels
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

import React from "react";

// Home sweet home
const Home = () => {
  return (
    <div>
      <h1> Project Status version 0.3.0 </h1>
      <p>Feature 5 is implimented. This is version 0.3.0.</p>
      <p>
        Sign Up and login function. Logged in users can't access auth, not
        logged in cannot access create or view (redirected to auth). Routes are
        protected (Typing urls wont evade log in). Auth methods in
        Services/UserModels
      </p>
      <p>
        You can create a user and you will be logged in after creating an
        account. You can also log into an existing acount and log out Then, you
        can access the create a form and view created form pages. At this point,
        you cannot access the auth components. The signed in user will be
        displayed in the hello message for this version.
      </p>
      <h2>TODO</h2>
      <ul>
        <li>Add voting functionality (Connect form to update)</li>
        <li>Let users view the forms they have created</li>
        <li>Add styling</li>
        <li>Make home page an instruction home page, not a todo</li>
      </ul>
    </div>
  );
};

export default Home;

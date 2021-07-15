import React from "react";

// Home sweet home
const Home = () => {
  return (
    <div>
      <h1> Project Status </h1>
      <p>
        Project status: For feature 5 we have implemented the register/sign in
        components under auth. This is used to access the now protected route
        "create". We still need to implement the voting functionality in order
        to get the app fully functioning but otherwise it is just polishing.
      </p>
      <h2>TODO</h2>
      <ul>
        <li>Add voting functionality (Connect from to update)</li>
        <li>Let users view the forms they have created</li>
        <li>Add styling</li>
        <li>Make home page an acutal home page, not a todo</li>
        <li>Write an about page</li>
      </ul>
    </div>
  );
};

export default Home;

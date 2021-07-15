import React from "react";

// Home sweet home
const Home = () => {
  return (
    <div>
      <h1> Project Status </h1>
      <p>
        Project status: Right now, for feature 4, the database is hooked up and
        the routing is configured. The create forms is functioning, needs
        authentification to put it in its final form. But it does create new
        forms in the DB correctly. So far, this is the only example of correct
        parse methods impliments. Routing works, and the vote feature currently
        can direct to the right form. There is a get call which calls the db to
        displau a form based on an id. Voting does not work but the
        requireemnests for feature 4 on this have been filled.
      </p>
      <h2>TODO</h2>
      <ul>
        <li>Add voting functionality (Connect from to update)</li>
        <li>Let users view the forms they have created</li>
        <li>Add styling</li>
        <li>Authentification for creating forms</li>
        <li>Make home page an acutal home page, not a todo</li>
        <li>Write an about page</li>
      </ul>
    </div>
  );
};

export default Home;

import React from "react";

// A homepage. Unsure of what it will be used for.
const Home = () => {
  return (
    <div>
      <h1> Project Status </h1>
      <p>
        Project status: Right now, for feature 4, the database is hooked up and
        the routing is configured. The create forms is functioning, needs
        authentification to put it in its final form. But it does create new
        forms in the DB correctly. So far, this is the only example of correct
        parse methods impliments. We have a get that works, but has not been put
        in place yet. Routing works, and the vote feature currently can direct
        to the right form.
      </p>
      <h2>TODO</h2>
      <ul>
        <li>Add voting functionality</li>
        <li>View a form from a Form name</li>
        <li>Add styling</li>
        <li>Authentification for creating forms</li>
      </ul>
    </div>
  );
};

export default Home;

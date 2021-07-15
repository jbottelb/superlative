import React from "react";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Nav from "./Components/Nav/nav.js";
import Signup from "./Components/Auth/Signup.js";
import Vote from "./Components/Vote/VoteParent.js";
import Voter from "./Components/Vote/voter.js";
import Create from "./Components/CreateForm/create.js";
import Parse from "parse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Env from "./environments.js";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// application
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/SignIn" exact component={Signup} />
          <Route path="/create" exact component={Create} />
          <Route path="/Vote" exact component={Vote} />
          <Route path="/voter/:id" exact component={Voter} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

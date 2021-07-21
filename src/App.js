import React from "react";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Nav from "./Components/Nav/nav.js";
import Signup from "./Components/Auth/Signup.js";
import Login from "./Components/Auth/LogIn.js";
import Logout from "./Components/Auth/LogOut.js";
import Vote from "./Components/Vote/VoteParent.js";
import Voter from "./Components/Vote/voter.js";
import Create from "./Components/CreateForm/create.js";
import view from "./Components/view/view.js";
import Parse from "parse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Components/routing/protected";
import SignInRoute from "./Components/routing/SignInRoute";
import * as Env from "./environments.js";
import { UserContext } from "./contexts/authContext";
import { useState } from "react";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// application
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <SignInRoute path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <SignInRoute path="/signup" exact component={Signup} />
            <ProtectedRoute path="/create" exact component={Create} />
            <Route path="/Vote" exact component={Vote} />
            <Route path="/voter/:id" exact component={Voter} />
            <ProtectedRoute path="/view" exact component={view} />
            <ProtectedRoute path="/logout" exact component={Logout} />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

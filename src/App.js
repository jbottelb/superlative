import React from "react";
import Auth from "./Components/Auth/Auth.js";
import Register from "./Components/Auth/AuthRegister.js";
import Login from "./Components/Auth/AuthLogin.js";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Nav from "./Components/Nav/nav.js";
import Vote from "./Components/Vote/VoteParent.js";
import Voter from "./Components/Vote/voter.js";
import Create from "./Components/CreateForm/create.js";
import ProtectedRoute from "./Common/AppTools/ProtectedRoute.js";
import AuthCheck from "./Components/Auth/AuthCheck";
import Parse from "parse";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Env from "./environments.js";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// application
const App = () => {
  var flag = AuthCheck.getAuth();
  var negFlag = !flag;
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/Auth" exact component={Auth} />
          <ProtectedRoute
            exact
            path="/Register"
            flag={negFlag}
            component={Register}
          />
          <ProtectedRoute
            exact
            path="/Login"
            flag={negFlag}
            component={Login}
          />
          <ProtectedRoute exact path="/create" flag={flag} component={Create} />

          <Route path="/create" exact component={Create} />
          <Route path="/Vote" exact component={Vote} />
          <Route path="/voter/:id" exact component={Voter} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

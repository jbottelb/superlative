import React from "react";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Nav from "./Components/Nav/nav.js";
import SignIn from "./Components/SignIn/signIn.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/SignIn" exact component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

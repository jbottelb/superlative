import React from "react";
import ParentModule from "./Parent";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const ContainerModule = () => {
  return (
    <div>
      This is the container component
      <hr />
      <Router>
        <Route path="/parent" component={ParentModule} exact />
        <Redirect to="/parent" />
      </Router>
    </div>
  );
};

export default ContainerModule;

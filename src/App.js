import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;

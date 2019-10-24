import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./Pages/Home";
import DetailPokemon from "./Pages/DetailPokemon";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={DetailPokemon} />
      </Switch>
    </Fragment>
  );
}

export default App;

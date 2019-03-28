import React from "react";
import "../src/styles/App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Wall from "./components/Wall";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wall" component={Wall} />
      </Switch>
    </div>
  );
};

export default App;

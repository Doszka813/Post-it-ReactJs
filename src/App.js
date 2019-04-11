import React from "react";
import "../src/styles/App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Wall from "./components/Wall";
import Home from "./components/Home";
import Sign from "./components/auth/Sign";
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wall" component={Wall} />
        <Route path="/signin" component={Sign} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;

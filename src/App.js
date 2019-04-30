import React from "react";
import "../src/styles/App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Wall from "./components/Wall/Wall";
import Home from "./components/Home";
import Sign from "./components/Auth/Sign";
import AuthorInfo from './components/Layout/Footer/AuthorInfo';
import Profile from './components/Profile/Profile';
import { Responsive } from "semantic-ui-react";

const App = () => {
  return (
    <Responsive className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/wall" component={Wall} />
        <Route path="/signin" component={Sign} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <AuthorInfo />
    </Responsive>
  );
};

export default App;

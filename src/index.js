import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import allReducers from "./reducers/all-reducers";
import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";

import { createStore } from "redux";

const persistedState = localStorage.getItem("boards")
  ? JSON.parse(localStorage.getItem("boards"))
  : [];

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("boards", JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

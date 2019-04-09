import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import allReducers from "./reducers/all-reducers";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import * as serviceWorker from "./serviceWorker";
import App from "./App";


import "semantic-ui-css/semantic.min.css";
import "./index.css";



// const persistedState = localStorage.getItem("boards")
//   ? JSON.parse(localStorage.getItem("boards"))
//   : [];

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true})
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
})

serviceWorker.unregister();

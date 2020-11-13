import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/App";
// import reducers from "./reducers";

ReactDOM.render(<App />, document.querySelector("#root"));

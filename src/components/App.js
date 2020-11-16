import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Landing from "./Landing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default App;

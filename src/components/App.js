import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Landing from './Landing';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

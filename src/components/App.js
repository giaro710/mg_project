import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Login2 from './Login2';
import Landing from './Landing';

const App = () => {
  const [token, setToken] = useState(true);

  if (!token) {
    return <Login />;
    // N.B. Posso passare la funzione hook 'setToken' come props a login:
    // return <Login setToken={setToken}/>;
    // In questo modo posso prendere il token da redux e poi settarlo direttamente nel component del login.
  }

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/login2" exact component={Login2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

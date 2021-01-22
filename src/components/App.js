import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login/Login';
import Login2 from './Login2';
import Landing from './LandingPage/Landing';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

const App = (props) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <div className="app__container">
            <div className="app__sidebar-container">
              <Sidebar />
            </div>
            <div className="app__main-content">
              <Route path="/" exact component={Landing} />
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    authToken: state.auth.token,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(App);

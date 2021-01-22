import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { auth } from '../../redux/actions';

import './Login.css';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  const onUsernameChange = (event) => {
    const inputUsernameValue = event.target.value;
    setInvalidUsername(false);
    if (inputUsernameValue.includes('')) {
      setUsername(inputUsernameValue);
    } else if (inputUsernameValue === '') {
      setInvalidUsername(false);
      setUsername(inputUsernameValue);
    } else {
      setUsername(inputUsernameValue);
      setInvalidUsername(true);
    }
  };

  const onPasswordChange = (event) => {
    const inputPasswordValue = event.target.value;
    setInvalidPassword(false);
    if (inputPasswordValue.length >= 1) {
      setPassword(inputPasswordValue);
    } else if (inputPasswordValue === '') {
      setInvalidPassword(false);
      setPassword(inputPasswordValue);
    } else {
      setPassword(inputPasswordValue);
      setInvalidPassword(true);
    }
  };

  const handleSubmit = () => {
    props.auth(username, password);
  };

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      {authRedirect}
      <h2 className="login__title">Bentornato!</h2>
      <p className="login__sub-title">Accedi alla dashboard</p>

      <div className="login__inputs-container">
        <div
          className={`login__input-field ${
            invalidUsername ? 'border-error' : ''
          }`}
        >
          <i className="fas fa-user login__icon"></i>
          <input
            onChange={(e) => onUsernameChange(e)}
            className="login__input"
            type="text"
            placeholder="Username"
            value={username}
          />
        </div>
        <p
          className={`login__invalid-text ${
            invalidUsername ? '' : 'not-visible'
          }`}
        >
          Invalid Username
        </p>

        <div
          className={`login__input-field ${
            invalidPassword ? 'border-error' : ''
          }`}
        >
          <i className="fas fa-lock login__icon"></i>
          <input
            onChange={(e) => onPasswordChange(e)}
            className="login__input"
            type="text"
            placeholder="Password"
            value={password}
          />
        </div>
        <p
          className={`login__invalid-text ${
            invalidPassword ? '' : 'not-visible'
          }`}
        >
          Invalid Password
        </p>

        <button className="login__btn" onClick={handleSubmit}>
          Sign in
        </button>
      </div>
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

export default connect(mapStateToProps, { auth })(Login);

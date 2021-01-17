import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setEmail } from '../redux/actions';
import { setPassword } from '../redux/actions';

import '../Login.css';

const Login = (props) => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  // console.log(props);

  useEffect(() => {
    console.log('Is changed');
  }, [props.email]);

  const onEmailChange = (email) => {
    setInvalidEmail(false);
    if (email.includes('@')) {
      props.setEmail(email);
    } else if (email === '') {
      setInvalidEmail(false);
    } else {
      props.setEmail(email);
      setInvalidEmail(true);
    }
  };

  const onPasswordChange = (password) => {
    setInvalidPassword(false);
    if (password.length >= 8) {
      props.setPassword(password);
    } else if (password === '') {
      setInvalidPassword(false);
    } else {
      props.setPassword(password);
      setInvalidPassword(true);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login__title">Bentornato!</h2>
      <p className="login__sub-title">Accedi alla dashboard</p>

      <div className="login__inputs-container">
        <div
          className={`login__input-field ${invalidEmail ? 'border-error' : ''}`}
        >
          <i className="fas fa-user login__icon"></i>
          <input
            onChange={(e) => onEmailChange(e.target.value)}
            className="login__input"
            type="email"
            placeholder="Email"
          />
        </div>
        <p
          className={`login__invalid-text ${invalidEmail ? '' : 'not-visible'}`}
        >
          Invalid Email
        </p>

        <div
          className={`login__input-field ${
            invalidPassword ? 'border-error' : ''
          }`}
        >
          <i className="fas fa-lock login__icon"></i>
          <input
            onChange={(e) => onPasswordChange(e.target.value)}
            className="login__input"
            type="password"
            placeholder="Password"
          />
        </div>
        <p
          className={`login__invalid-text ${
            invalidPassword ? '' : 'not-visible'
          }`}
        >
          Invalid Password
        </p>

        <button className="login__btn">Sign in</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { email: state.email, password: state.password };
};

export default connect(mapStateToProps, { setEmail, setPassword })(Login);

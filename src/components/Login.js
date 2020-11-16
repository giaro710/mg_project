import React, { useState } from "react";
import { connect } from "react-redux";

import { setEmail } from "../actions";
import { setPassword } from "../actions";

import "../Login.css";

const Login = (props) => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const onEmailChange = (e) => {
    setInvalidEmail(false);
    if (e.target.value.includes("@")) {
      props.setEmail(e.target.value);
    } else if (e.target.value === "") {
      setInvalidEmail(false);
    } else {
      setInvalidEmail(true);
    }
  };

  const onPasswordChange = (e) => {
    setInvalidPassword(false);
    if (e.target.value.length >= 8) {
      this.props.setPassword(e.target.value);
    } else if (e.target.value === "") {
      setInvalidPassword(false);
    } else {
      setInvalidPassword(true);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login__title">Bentornato!</h2>
      <p className="login__sub-title">Accedi alla dashboard</p>

      <div className="login__inputs-container">
        <div
          className={`login__input-field ${invalidEmail ? "border-error" : ""}`}
        >
          <i className="fas fa-user login__icon"></i>
          <input
            onChange={(e) => onEmailChange(e)}
            className="login__input"
            type="text"
            placeholder="Email"
          />
        </div>
        <p
          className={`login__invalid-text ${invalidEmail ? "" : "not-visible"}`}
        >
          Invalid Email
        </p>

        <div
          className={`login__input-field ${
            invalidPassword ? "border-error" : ""
          }`}
        >
          <i className="fas fa-lock login__icon"></i>
          <input
            onChange={(e) => onPasswordChange(e)}
            className="login__input"
            type="text"
            placeholder="Password"
          />
        </div>
        <p
          className={`login__invalid-text ${
            invalidPassword ? "" : "not-visible"
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
  return { email: state.email };
};

export default connect(mapStateToProps, { setEmail, setPassword })(Login);

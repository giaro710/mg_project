import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// import { setEmail } from "../actions";
// import { setPassword } from "../actions";

import "../Login.css";

const Login = (props) => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setNewEmail(email);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [email]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setNewPassword(password);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [password]);

  useEffect(() => {
    setInvalidEmail(false);
    if (newEmail.includes("@")) {
      // Bisogna fare qualcosa qui (mettere il verde?)
      // Probabilmente qui si mette la validation e qualcosa che dica che la mail va bene e si può procedere
    } else if (email === "") {
      setInvalidEmail(false);
    } else {
      //Bisogna anche qui
      setInvalidEmail(true);
    }
  }, [newEmail]);

  useEffect(() => {
    setInvalidPassword(false);
    if (newPassword.length >= 8) {
      // Bisogna fare qualcosa qui
    } else if (password === "") {
      setInvalidPassword(false);
    } else {
      //Bisogna anche qui
      setInvalidPassword(true);
    }
  }, [newPassword]);

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
            onChange={(e) => setEmail(e.target.value)}
            className="login__input"
            type="text"
            placeholder="Email"
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            className="login__input"
            type="text"
            placeholder="Password"
            value={password}
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
  // console.log(state);
  return { email: state.email, password: state.password };
};

export default connect(mapStateToProps)(Login);

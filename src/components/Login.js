import React from "react";
import "../Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <h2 className="login__title">Bentornato!</h2>
        <p className="login__sub-title">Accedi alla dashboard</p>

        <div className="login__inputs-container">
          <div className="login__input-field">
            <i className="fas fa-user login__icon"></i>
            <input className="login__input" type="email" placeholder="Email" />
          </div>

          <div className="login__input-field">
            <i className="fas fa-lock login__icon"></i>
            <input
              className="login__input"
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="login__btn">Sign in</button>
        </div>
      </div>
    );
  }
}

export default Login;

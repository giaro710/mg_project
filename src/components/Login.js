import React from "react";
import { connect } from "react-redux";

import { setEmail } from "../actions";

import "../Login.css";

class Login extends React.Component {
  state = { invalidEmail: false, invalidPassword: false };

  onEmailChange = (e) => {
    this.setState({ invalidEmail: false });
    if (e.target.value.includes("@") || e.target.value === "") {
      console.log("ottimo");
      this.props.setEmail(e.target.value);
    } else {
      this.setState({ invalidEmail: true });
    }
  };

  onPasswordChange = (e) => {
    this.setState({ invalidPassword: false });
    if (e.target.value.length >= 8) {
      console.log("ottimo");
    } else {
      this.setState({ invalidPassword: true });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2 className="login__title">Bentornato!</h2>
        <p className="login__sub-title">Accedi alla dashboard</p>

        <div className="login__inputs-container">
          <div
            className={`login__input-field ${
              this.state.invalidEmail ? "border-error" : ""
            }`}
          >
            <i className="fas fa-user login__icon"></i>
            <input
              onChange={(e) => this.onEmailChange(e)}
              className="login__input"
              type="text"
              placeholder="Email"
            />
          </div>
          <p
            className={`login__invalid-text ${
              this.state.invalidEmail ? "" : "not-visible"
            }`}
          >
            Invalid Email
          </p>

          <div
            className={`login__input-field ${
              this.state.invalidPassword ? "border-error" : ""
            }`}
          >
            <i className="fas fa-lock login__icon"></i>
            <input
              onChange={(e) => this.onPasswordChange(e)}
              className="login__input"
              type="text"
              placeholder="Password"
            />
          </div>
          <p
            className={`login__invalid-text ${
              this.state.invalidPassword ? "" : "not-visible"
            }`}
          >
            Invalid Password
          </p>

          <button className="login__btn">Sign in</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { email: state.email };
};

export default connect(mapStateToProps, { setEmail })(Login);

import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import {
  setLoginNickname,
  setLoginPassword,
  setLoginError,
} from "../../redux/auth-reducer";
import api from "../../axios/api-config";

class LoginContainer extends React.Component {
  sendLogin = () => {
    api
      .post("/login", {
        nickname: this.props.loginNickname,
        password: this.props.loginPassword,
      })
      .then((response) => {
        if (response.data.isError) {
          this.props.setLoginError(response.data.message, true);
        } else {
          this.props.setLoginError(null, false);
          sessionStorage.setItem("token", response.data.token);
        }
      });
  };

  render() {
    return <Login {...this.props} sendLogin={this.sendLogin} />;
  }
}

const mapStateToProps = (state) => {
  return {
    loginNickname: state.auth.loginNickname,
    loginPassword: state.auth.loginPassword,
    isError: state.auth.isError,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps, {
  setLoginNickname,
  setLoginPassword,
  setLoginError,
})(LoginContainer);

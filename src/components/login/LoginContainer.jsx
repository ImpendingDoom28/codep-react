import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import {
  setLoginNickname,
  setLoginPassword,
  setLoginError,
  setUserData,
} from "../../redux/auth-reducer";
import api from "../../axios/api-config";
import * as tokenService from "../../js/services/TokenService";

class LoginContainer extends React.Component {
  sendLogin = () => {
    debugger;
    api
      .post("/login", {
        nickname: this.props.loginNickname,
        password: this.props.loginPassword,
      })
      .then((response) => {
        const { token, isError, message, userData } = response.data;
        if (isError) {
          this.props.setLoginError(message, true);
        } else {
          tokenService.setToken(token);
          this.props.setUserData(
            userData.id,
            userData.nickname,
            userData.email,
            userData.role,
            userData.state
          );
          this.props.setLoginError(null, false);
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
    id: state.auth.id,
  };
};

export default connect(mapStateToProps, {
  setLoginNickname,
  setLoginPassword,
  setLoginError,
  setUserData,
})(LoginContainer);

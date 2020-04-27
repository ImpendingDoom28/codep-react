import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import {
  setNickname,
  setPassword,
  setEmail,
  setConfirmPassword,
  setError,
  setSuccessMessage,
} from "../../redux/register-reducer";
import api from "../../axios/api-config";

class RegisterContainer extends React.Component {
  sendRegister = () => {
    api
      .post("/register", {
        nickname: this.props.nickname,
        password: this.props.password,
        confirmPassword: this.props.confirmPassword,
        email: this.props.email,
      })
      .then((response) => {
        debugger;
        if (response.data.isError) {
          this.props.setError(response.data.message, true);
        } else {
          this.props.setError(null, false);
          this.props.setSuccessMessage(response.data.message);
          this.props.setSuccessMessage(null);
        }
      });
  };

  render() {
    return <Register sendRegister={this.sendRegister} {...this.props} />;
  }
}

//С помощью этого метода мы мапим наш state
//В пропсы подвязаной с помощью коннекта контейнерной
//компоненты (чуть выше в файле)
const mapStateToProps = (state) => {
  return {
    nickname: state.registerPage.nickname,
    password: state.registerPage.password,
    confirmPassword: state.registerPage.confirmPassword,
    email: state.registerPage.email,
    isError: state.registerPage.isError,
    error: state.registerPage.error,
    successMessage: state.registerPage.successMessage,
  };
};

//mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, {
  setNickname,
  setPassword,
  setConfirmPassword,
  setEmail,
  setError,
  setSuccessMessage,
})(RegisterContainer);

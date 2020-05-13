import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import api from "../../../axios/api-config";
import * as tokenService from "../../../js/services/TokenService";
import { setLoginError, setUserData } from "../../../redux/auth-reducer";

class FacebookLoginContainer extends React.Component {
  responseFacebook = (response) => {
    console.log(response);
    if (!response.status) {
      api()
        .post("/facebook/login", {
          nickname: response.name,
          email: response.email,
          accessToken: response.accessToken,
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
    }
  };

  render() {
    const { t } = this.props;
    return (
      <FacebookLogin
        appId="3878689128808673"
        autoLoad={false}
        textButton={t("loginPage:loginWithFacebook")}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const WithTranslationFacebookLoginContainer = withTranslation()(
  FacebookLoginContainer
);

export default connect(mapStateToProps, {
  setUserData,
  setLoginError,
})(WithTranslationFacebookLoginContainer);

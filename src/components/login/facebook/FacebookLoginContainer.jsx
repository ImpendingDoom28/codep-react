import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

class FacebookLoginContainer extends React.Component {
  responseFacebook = (response) => {
    console.log(response);
    //TODO: add post request to server with facebook
    //to verify your response
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

export default connect(
  mapStateToProps,
  {}
)(WithTranslationFacebookLoginContainer);

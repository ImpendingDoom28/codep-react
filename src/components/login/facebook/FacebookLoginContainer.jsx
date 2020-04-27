import React from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";

class FacebookLoginContainer extends React.Component {
  responseFacebook = (response) => {
    console.log(response);
    //TODO: add post request to server with facebook
    //to verify your response
  };

  render() {
    return (
      <FacebookLogin
        appId="3878689128808673"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(FacebookLoginContainer);

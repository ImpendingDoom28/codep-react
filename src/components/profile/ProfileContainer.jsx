import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {
  setIsProfileFetching,
  setSandboxes,
  setBio,
  setProfileError,
} from "../../redux/profile-reducer";
import {
  setIsFetching,
  setName,
  setSandboxId,
  changeHtml,
  changeCss,
  changeJs,
  setIsSandboxLoaded,
} from "../../redux/sandbox-reducer";
import Loader from "../common/loader/Loader";
import api from "../../axios/api-config";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    api()
      .get("/profile/" + userId)
      .then((response) => {
        const { sandboxes, bio, isError, message } = response.data;
        if (isError) {
          this.props.setProfileError(message, true);
        } else {
          this.props.setProfileError(null, false);
          this.props.setSandboxes(sandboxes);
          this.props.setBio(bio);
          this.props.setIsProfileFetching(false);
        }
      });
  }

  loadSandbox = (id) => {
    api()
      .get("/sandbox/" + id)
      .then((response) => {
        console.log(response.data);
        if (!response.data.isError) {
          const { id, name, htmlCode, cssCode, jsCode } = response.data;
          this.props.changeHtml(htmlCode);
          this.props.changeCss(cssCode);
          this.props.changeJs(jsCode);
          this.props.setSandboxId(id);
          this.props.setName(name);
          this.props.setIsFetching(true);
          this.props.setIsSandboxLoaded(true);
          this.props.setIsSandboxLoaded(false);
        }
      });
  };

  render() {
    return (
      <>
        {this.props.isProfileFetching ? (
          <Loader to={this.props.location.pathname} />
        ) : (
          <Profile
            {...this.props}
            sandboxes={this.props.sandboxes}
            userInfo={this.props.userInfo}
            loadSandbox={this.loadSandbox}
          />
        )}
        {this.props.isSandboxLoaded ? <Redirect to="/sandbox" /> : ""}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userData,
    sandboxes: state.profilePage.sandboxes,
    isProfileFetching: state.profilePage.isFetching,
    bio: state.profilePage.bio,
    isSandboxLoaded: state.sandboxPage.isSandboxLoaded,
  };
};

//компонента-обёртка над ProfileContainer, которая
//предоставляет нам доступ к location, history и match
const WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setIsProfileFetching,
  setSandboxes,
  setBio,
  setProfileError,
  setSandboxId,
  setName,
  setIsFetching,
  setIsSandboxLoaded,
  changeHtml,
  changeCss,
  changeJs,
})(WithUrlDataProfileContainer);

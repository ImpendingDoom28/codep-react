import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  setIsProfileFetching,
  setSandboxes,
  setDescription,
  setProfileError,
} from "../../redux/profile-reducer";
import Loader from "../common/loader/Loader";
import api from "../../axios/api-config";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setIsProfileFetching(true);
    let userId = this.props.match.params.userId;
    api()
      .get("/profile/" + userId)
      .then((response) => {
        const { sandboxes, description, isError, message } = response.data;
        if (isError) {
          this.props.setProfileError(message, true);
        } else {
          this.props.setIsProfileFetching(false);
          this.props.setProfileError(null, false);
          this.props.setSandboxes(sandboxes);
          this.props.setDescription(description);
        }
      });
  }

  render() {
    return (
      <>
        {this.props.isProfileFetching ? (
          <Loader to={this.props.location.pathname} />
        ) : (
          <Profile {...this.props} userInfo={this.props.userInfo} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userData,
    sandboxes: state.profilePage.sandboxes,
    isProfileFetching: state.profilePage.isFetching,
  };
};

//компонента-обёртка над ProfileContainer, которая
//предоставляет нам доступ к location, history и match
const WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setIsProfileFetching,
  setSandboxes,
  setDescription,
  setProfileError,
})(WithUrlDataProfileContainer);

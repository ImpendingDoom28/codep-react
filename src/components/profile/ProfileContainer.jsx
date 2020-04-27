import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios.get("http://localhost:8080/profile/" + userId).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

//компонента-обёртка над ProfileContainer, которая
//предоставляет н
const WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithUrlDataProfileContainer);

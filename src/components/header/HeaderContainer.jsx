import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header profileId={this.props.profileId} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profileId: state.auth.userData.id,
  };
};

export default connect(mapStateToProps, {})(HeaderContainer);

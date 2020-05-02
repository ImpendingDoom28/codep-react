import React from "react";
import Sandbox from "./Sandbox";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "../common/loader/Loader";
import { setIsFetching } from "../../redux/sandbox-reducer";

class SandboxContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.isFetching &&
        this.props.htmlTemplateCode === `` &&
        this.props.cssTemplateCode === `` ? (
          <Loader to={this.props.location.pathname} />
        ) : (
          <Sandbox />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.sandboxPage.isFetching,
    htmlTemplateCode: state.sandboxPage.htmlInfo.htmlTemplateCode,
    cssTemplateCode: state.sandboxPage.cssInfo.cssTemplateCode,
  };
};

export default withRouter(
  connect(mapStateToProps, { setIsFetching })(SandboxContainer)
);

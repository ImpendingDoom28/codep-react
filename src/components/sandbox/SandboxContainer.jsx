import React from "react";
import Sandbox from "./Sandbox";
import { connect } from "react-redux";
import Loader from "../common/loader/Loader";
import { setIsFetching } from "../../redux/sandbox-reducer";

class SandboxContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.isFetching &&
        this.props.htmlTemplateCode === `` &&
        this.props.cssTemplateCode === `` ? (
          <Loader />
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

export default connect(mapStateToProps, { setIsFetching })(SandboxContainer);

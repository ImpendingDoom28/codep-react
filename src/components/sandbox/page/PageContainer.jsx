import React from "react";
import Page from "./Page";
import { connect } from "react-redux";

class PageContainer extends React.Component {
  render() {
    return <Page {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    code: state.sandboxPage.blobUrl,
    sandboxName: state.sandboxPage.name,
  };
};

export default connect(mapStateToProps, {})(PageContainer);

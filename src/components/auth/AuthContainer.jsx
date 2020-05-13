import React from "react";
import { connect } from "react-redux";
import api from "../../axios/api-config";
import { Redirect, withRouter } from "react-router-dom";
import { setIsVerificationTokenOk } from "../../redux/auth-reducer";
import Loader from "../common/loader/Loader";

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: true };
    console.log(this.props.location.search);
  }

  verifyToken() {
    const getParams = this.props.location.search;
    api()
      .get("/auth?verificationToken=" + getParams.split("=")[1])
      .then((response) => {
        this.props.setIsVerificationTokenOk(!response.data.isError);
        this.setState({ isFetching: false });
      });
  }

  componentDidMount() {
    this.verifyToken();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <>
            {this.props.isOk ? (
              <Redirect to="/login" />
            ) : (
              <Redirect to="/register" />
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOk: state.auth.isOk,
  };
};

const WithRouterAuthContainer = withRouter(AuthContainer);

export default connect(mapStateToProps, { setIsVerificationTokenOk })(
  WithRouterAuthContainer
);

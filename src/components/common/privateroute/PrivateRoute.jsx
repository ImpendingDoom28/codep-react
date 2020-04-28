import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as tokenService from "../../../js/services/TokenService";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        tokenService.isTokenPresent() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

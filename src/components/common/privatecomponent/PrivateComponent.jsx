import React from "react";
import * as tokenService from "../../../js/services/TokenService";

const PrivateComponent = (props) => {
  return (
    <>
      {tokenService.isTokenPresent() ? (
        <>{props.children}</>
      ) : (
        <>{props.rest}</>
      )}
    </>
  );
};
export default PrivateComponent;

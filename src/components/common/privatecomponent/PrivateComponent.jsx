import React from "react";
import * as tokenService from "../../../js/TokenService";

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

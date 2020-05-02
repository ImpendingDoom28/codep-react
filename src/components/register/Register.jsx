import React from "react";
import css from "./Register.module.css";
import Description from "./description/Description";
import RegisterForm from "./registerform/RegisterForm";
import { Redirect } from "react-router-dom";
import * as tokenService from "../../js/services/TokenService";

const Register = (props) => {
  const descriptionList = [
    "Ability to save your snippets!",
    "To load or upload code snippets from out site!",
  ];
  const title = "Sign up now to get:";
  return (
    <>
      {tokenService.isTokenPresent() ? (
        <Redirect to={"/profile/" + props.profileId} />
      ) : (
        <div className={css.container}>
          {/* <div className={css.downangle}></div>
      <div className={css.triangle}></div> */}
          <Description title={title} list={descriptionList} />
          <RegisterForm {...props} />
          <div className={css.square}></div>
        </div>
      )}
    </>
  );
};

export default Register;

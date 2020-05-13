import React from "react";
import css from "./Register.module.css";
import Description from "./description/Description";
import RegisterForm from "./registerform/RegisterForm";
import { Redirect } from "react-router-dom";
import * as tokenService from "../../js/services/TokenService";
import { useTranslation } from "react-i18next";

const Register = (props) => {
  const { t } = useTranslation("registerPage");
  const descriptionList = [t("description.1"), t("description.2")];
  const title = t("description.title");
  return (
    <>
      {tokenService.isTokenPresent() ? (
        <Redirect to={"/profile/" + props.profileId} />
      ) : (
        <div className={css.container}>
          <Description title={title} list={descriptionList} />
          <RegisterForm {...props} />
          <div className={css.square}></div>
        </div>
      )}
    </>
  );
};

export default Register;

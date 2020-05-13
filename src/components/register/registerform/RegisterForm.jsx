import React from "react";
import css from "./RegisterForm.module.css";
import Form from "./form/Form";
import NavigationLink from "../../common/navigationlink/NavigationLink";
import ErrorMessage from "../../common/message/errormessage/ErrorMessage";
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterForm = (props) => {
  const { t } = useTranslation("registerPage");
  return (
    <>
      {props.successMessage !== null ? (
        <>
          <Redirect
            to={{
              pathname: "/confirm",
              search: "",
              state: { email: props.email },
            }}
          />
        </>
      ) : (
        <>
          <div className={css.response_message}>
            {props.isError === true ? (
              <ErrorMessage error={props.error} />
            ) : null}
          </div>
          <div className={css.form_container}>
            <div className={css.title_wrapper}>
              <h2>{t("form.title")}</h2>
              <h5>{t("form.undertitle")}</h5>
            </div>
            <Form {...props} />
            <NavigationLink to="/login" text={t("form.alreadyHaveAccount")} />
          </div>
        </>
      )}
    </>
  );
};

export default RegisterForm;

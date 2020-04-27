import React from "react";
import css from "./RegisterForm.module.css";
import Form from "./form/Form";
import NavigationLink from "../../common/navigationlink/NavigationLink";
import ErrorMessage from "../../common/message/errormessage/ErrorMessage";
import { Redirect } from "react-router-dom";

const RegisterForm = (props) => {
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
              <h2>Register</h2>
              <h5>Join CodeP</h5>
            </div>
            <Form {...props} />
            <NavigationLink to="/login" text="Already have an account?" />
          </div>
        </>
      )}
    </>
  );
};

export default RegisterForm;

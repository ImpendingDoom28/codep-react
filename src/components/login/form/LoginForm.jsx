import React from "react";
import css from "./LoginForm.module.css";
import FormInput from "../../register/registerform/form/forminput/FormInput";
import FormButtonInput from "../../register/registerform/form/formbuttoninput/FormButtonInput";
import FacebookContainer from "../facebook/FacebookLoginContainer";
import NavigationLink from "../../common/navigationlink/NavigationLink";
import { Redirect } from "react-router-dom";
import ErrorMessage from "../../common/message/errormessage/ErrorMessage";

const LoginForm = (props) => {
  return (
    <>
      {localStorage.getItem("token") !== null ? (
        <Redirect to="/profile" />
      ) : (
        <>
          <div className={css.response_message}>
            {props.isError === true ? (
              <ErrorMessage error={props.error} />
            ) : null}
          </div>
          <div className={css.form_wrapper}>
            <div className={css.title_wrapper}>
              <h2>Login</h2>
            </div>
            <FormInput
              setInput={props.setLoginNickname}
              type={"text"}
              placeholder={"Enter your login"}
              value={props.loginNickname}
              required={true}
            />
            <FormInput
              setInput={props.setLoginPassword}
              type={"password"}
              placeholder={"Enter you password"}
              value={props.loginPassword}
              required={true}
            />
            <FormButtonInput
              sendAction={props.sendLogin}
              buttonText={"Log in CodeP"}
            />
            <div className={css.facebook_wrapper}>
              <FacebookContainer />
            </div>
            <NavigationLink
              to="/register"
              text="No account? Register right now!"
            />
          </div>
        </>
      )}
    </>
  );
};

export default LoginForm;
import React from "react";
import css from "./Login.module.css";
import LoginForm from "./form/LoginForm";

const Login = (props) => {
  return (
    <div className={css.page_wrapper}>
      <div className={css.rectangle_one}></div>
      <LoginForm {...props} />
      <div className={css.rectangle_two}></div>
    </div>
  );
};

export default Login;

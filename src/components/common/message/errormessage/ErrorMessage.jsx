import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return (
    <div className={css.container}>
      <h2 className={css.message}>Error! {props.error}</h2>
    </div>
  );
};

export default ErrorMessage;

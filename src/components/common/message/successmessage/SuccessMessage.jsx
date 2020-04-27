import React from "react";
import css from "./SuccessMessage.module.css";

const SuccessMessage = (props) => {
  return (
    <div className={css.container}>
      <h2 className={css.message}>{props.message} </h2>
    </div>
  );
};

export default SuccessMessage;

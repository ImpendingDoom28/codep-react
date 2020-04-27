import React from "react";
import css from "./FormButtonInput.module.css";

const FormButtonInput = (props) => {
  return (
    <div className={css.container}>
      <button onClick={props.sendAction}>{props.buttonText}</button>
    </div>
  );
};

export default FormButtonInput;

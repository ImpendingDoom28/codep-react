import React from "react";
import css from "./Console.module.css";

const Console = (props) => {
  return (
    <div className={css.wrapper}>
      <h2>Console</h2>
      <textarea readOnly={true} className={css.console}></textarea>
    </div>
  );
};

export default Console;

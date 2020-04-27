import React from "react";
import css from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={css.description_container}>
      <div className={css.title_wrapper}>
        <h2>{props.title}</h2>
      </div>
      <div className={css.description_wrapper}>
        <ul>
          {props.list.map((elem) => {
            return <li key={elem}>{elem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Description;

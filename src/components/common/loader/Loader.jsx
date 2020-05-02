import React from "react";
import loader from "../../../assets/loader/loader.gif";
import css from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={css.loader_wrapper}>
      <img className={css.loader} src={loader}></img>
      <h2 className={css.loading_text}>Loading {props.to}...</h2>
    </div>
  );
};

export default Loader;

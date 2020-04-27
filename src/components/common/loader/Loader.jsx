import React from "react";
import loader from "../../../assets/loader/loader.gif";
import css from "./Loader.module.css";

const Loader = (props) => {
  return (
    <div className={css.loader_wrapper}>
      <img className={css.loader} src={loader}></img>
    </div>
  );
};

export default Loader;

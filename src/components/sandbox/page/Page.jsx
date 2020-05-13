import React from "react";
import css from "./Page.module.css";

const Page = (props) => {
  return (
    <div className={css.page_wrapper}>
      <h2>Result View: {props.sandboxName}</h2>
      <iframe
        id="iframe"
        className={css.result_page_view}
        src={props.code}
      ></iframe>
    </div>
  );
};

export default Page;

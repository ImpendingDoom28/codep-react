import React from "react";
import PageContainer from "./page/PageContainer";
import CodeSidebarContainer from "./codesidebar/CodeSidebarContainer";
import css from "./Sandbox.module.css";
import Console from "./console/Console";
import SidebarContainer from "../sidebar/SidebarContainer";

const Sandbox = (props) => {
  return (
    <div className={css.content_wrapper}>
      <div className={css.sidebar}>
        <SidebarContainer />
      </div>
      <div className={css.codesidebar}>
        <CodeSidebarContainer />
      </div>
      <div className={css.result}>
        <PageContainer />
        <Console />
      </div>
    </div>
  );
};

export default Sandbox;

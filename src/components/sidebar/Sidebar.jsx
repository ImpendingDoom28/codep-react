import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = props => {
  return (
    <section>
      <div>
        <button className={css.button}>Save</button>
      </div>
      <div>
        <button className={css.button}>Reset</button>
      </div>
      <div>
        <button className={css.button}>Something else</button>
      </div>
    </section>
  );
};

export default Sidebar;

import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <section>
      <div>
        <button className={css.button} onClick={props.chooseName}>
          Сохранить
        </button>
      </div>
      <div>Скоро...</div>
    </section>
  );
};

export default Sidebar;

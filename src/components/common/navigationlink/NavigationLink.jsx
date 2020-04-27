import React from "react";
import css from "./NavigationLink.module.css";
import { NavLink } from "react-router-dom";

const NavigationLink = (props) => {
  return (
    <NavLink to={props.to} className={css.link}>
      {props.text}
    </NavLink>
  );
};

export default NavigationLink;

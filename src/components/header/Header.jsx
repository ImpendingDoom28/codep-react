import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import titlePhoto from "../../assets/gold-colored-letter-p-illustration-png-clip-art.png";
import NavigationLink from "../common/navigationlink/NavigationLink";

const Header = (props) => {
  return (
    <nav>
      <span сlassName={css.left}>
        <h2 className={css.title}>
          Code
          <span className={css.photo_wrapper}>
            <img className={css.photo} src={titlePhoto}></img>
          </span>
        </h2>
        <span className={css.span}>
          <NavigationLink to="/sandbox" text="Sandbox" />
        </span>
        <span className={css.span}>
          <NavigationLink to="/support" text="Support" />
        </span>
      </span>
      <div className={css.right}>
        <div>
          <NavigationLink to="/login" text="Login" />
        </div>
        <div>
          <NavigationLink to="/register" text="Register" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

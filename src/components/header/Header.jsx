import React from "react";
import css from "./Header.module.css";
import titlePhoto from "../../assets/gold-colored-letter-p-illustration-png-clip-art.png";
import NavigationLink from "../common/navigationlink/NavigationLink";

const Header = (props) => {
  return (
    <nav>
      <h2 className={css.title}>CodeP</h2>
      <div className={css.span}>
        <NavigationLink to="/sandbox" text="Sandbox" />
      </div>
      <div className={css.span}>
        <NavigationLink to="/support" text="Support" />
      </div>
      <div className={css.span}>
        <NavigationLink to="/login" text="Login" />
      </div>
      <div className={css.span}>
        <NavigationLink to="/register" text="Register" />
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import css from "./Header.module.css";
import NavigationLink from "../common/navigationlink/NavigationLink";
import * as tokenService from "../../js/TokenService";
import PrivateRoute from "../common/privateroute/PrivateRoute";
import PrivateComponent from "../common/privatecomponent/PrivateComponent";

const Header = (props) => {
  const publicLinks = [
    <NavigationLink id="/login" to="/login" text="Login" />,
    <NavigationLink id="/login" to="/register" text="Register" />,
  ];
  return (
    <nav>
      <div className={css.left}>
        <NavigationLink to="/sandbox" text="Sandbox" />
        <PrivateComponent>
          <NavigationLink to="/support" text="Support" />
        </PrivateComponent>
      </div>
      <div className={css.center}>
        <h2 className={css.title}>
          <NavigationLink to="/sandbox" text="Codep" />
        </h2>
      </div>
      <div className={css.right}>
        <PrivateComponent rest={publicLinks}>
          <NavigationLink to="/profile/" text="Your Profile" />
        </PrivateComponent>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import css from "./Header.module.css";
import NavigationLink from "../common/navigationlink/NavigationLink";
import PrivateComponent from "../common/privatecomponent/PrivateComponent";
import { useTranslation } from "react-i18next";

const Header = (props) => {
  const { t } = useTranslation("common");
  const publicLinks = [
    <NavigationLink id="/login" to="/login" text={t("header.login")} />,
    <NavigationLink
      id="/register"
      to="/register"
      text={t("header.register")}
    />,
  ];
  return (
    <nav>
      <div className={css.left}>
        <NavigationLink to="/sandbox" text={t("header.sandbox")} />
      </div>
      <div className={css.center}>
        <h2 className={css.title}>
          <NavigationLink to="/sandbox" text="Codep" />
        </h2>
      </div>
      <div className={css.right}>
        <PrivateComponent rest={publicLinks}>
          <NavigationLink
            to={"/profile/" + props.profileId}
            text={t("header.profile")}
          />
          {props.isAdmin ? (
            <NavigationLink to={"/admin"} text={t("header.adminPanel")} />
          ) : (
            <></>
          )}
        </PrivateComponent>
      </div>
    </nav>
  );
};

export default Header;

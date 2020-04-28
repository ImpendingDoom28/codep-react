import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";
import { withRouter, Switch } from "react-router-dom";
import "./Container.css";
import { getAllRoutes } from "../../js/services/RoutesService";

const Container = (props) => {
  const routes = getAllRoutes();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={props.location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={"fade"}
      >
        <Switch location={props.location}>{routes}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Container);

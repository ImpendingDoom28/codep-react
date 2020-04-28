import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";
import RegisterContainer from "../register/RegisterContainer";
import LoginContainer from "../login/LoginContainer";
import Profile from "../profile/Profile";
import SupportContainer from "../support/SupportContainer";
import Confirm from "../confirm/Confirm";
import { withRouter, Route, Switch } from "react-router-dom";
import "./Container.css";
import PrivateRoute from "../common/privateroute/PrivateRoute";
import SandboxContainer from "../sandbox/SandboxContainer";
import Root from "../root/Root";

const Container = (props) => {
  const routesData = [
    {
      path: "/sandbox",
      isExact: false,
      render: () => <SandboxContainer />,
    },
    {
      path: "/login",
      isExact: true,
      render: () => <LoginContainer />,
    },
    {
      path: "/register",
      isExact: true,
      render: () => <RegisterContainer />,
    },
    {
      path: "/confirm",
      isExact: false,
      render: () => <Confirm />,
    },
    {
      path: "/",
      isExact: true,
      render: () => <Root />,
    },
  ];
  const privateRoutesData = [
    {
      path: "/profile/:userId",
      isExact: true,
      render: () => <Profile />,
    },
    {
      path: "/support",
      isExact: true,
      render: () => <SupportContainer />,
    },
  ];

  const routesComponents = routesData.map((elem) => (
    <Route
      key={elem.path}
      path={elem.path}
      exact={elem.isExact}
      component={elem.component || elem.render}
    />
  ));
  const privateRoutesComponents = privateRoutesData.map((elem) => (
    <PrivateRoute key={elem.path} path={elem.path} exact={elem.isExact}>
      {elem.render}
    </PrivateRoute>
  ));

  const routes = [...routesComponents, ...privateRoutesComponents];

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

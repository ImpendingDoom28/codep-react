import React from "react";
import PrivateRoute from "../../components/common/privateroute/PrivateRoute";
import SandboxContainer from "../../components/sandbox/SandboxContainer";
import Root from "../../components/root/Root";
import RegisterContainer from "../../components/register/RegisterContainer";
import LoginContainer from "../../components/login/LoginContainer";
import ProfileContainer from "../../components/profile/ProfileContainer";
import SupportContainer from "../../components/support/SupportContainer";
import Confirm from "../../components/confirm/Confirm";
import { Route } from "react-router-dom";

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
    component: <ProfileContainer />,
  },
  {
    path: "/support",
    isExact: true,
    component: <SupportContainer />,
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
    {elem.component}
  </PrivateRoute>
));

const routes = [...routesComponents, ...privateRoutesComponents];

export const getAllRoutes = () => {
  return routes;
};

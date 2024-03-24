import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/Login.page";
import Dashboard from "../Pages/Dashboard/Dashboard.page";
import PrivateRoute from "./PrivateRoute";

const AppWithRouteAccess: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
    </Switch>
  );
};

export default AppWithRouteAccess;

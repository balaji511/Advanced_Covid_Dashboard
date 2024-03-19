import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/Login.page";

const AppWithRouteAccess: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default AppWithRouteAccess;

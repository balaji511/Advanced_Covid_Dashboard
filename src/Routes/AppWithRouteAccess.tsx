import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.page";
import Header from "../Components/Header/Header.component";

const AppWithRouteAccess: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </>
  );
};

export default AppWithRouteAccess;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login/Login.page";
import Dashboard from "../Pages/Dashboard/Dashboard.page";
import PrivateRoute from "./PrivateRoute";
import Signup from "../Pages/Signup/Signup.page";
import Header from "../Components/Header/Header.component";

const AppWithRouteAccess: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
      </Switch>
    </>
  );
};

export default AppWithRouteAccess;

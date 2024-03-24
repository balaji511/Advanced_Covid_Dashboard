import { Route } from "@mui/icons-material";
import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute: React.FC<any> = (props: any) => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default PrivateRoute;

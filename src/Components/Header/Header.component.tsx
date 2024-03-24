import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const Header: React.FC<any> = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Header;

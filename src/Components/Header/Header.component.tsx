import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import "../Header/Header.css";
import { useHistory, useLocation } from "react-router-dom";
import {
  IMobileDisplayContextType,
  MobileDisplayContext,
} from "../../Context/MobileDisplay.content";

const Header: React.FC<any> = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const { isMobileScreen } =
    useContext<IMobileDisplayContextType>(MobileDisplayContext);
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#1E1E30" }}
      className="header-container"
    >
      <Toolbar className="header-container-toolbar">
        <Typography className="header-text">
          COVID19<span style={{ color: "#007BFF" }}>INDIA</span>
        </Typography>
        <Stack
          gap={6}
          mr={10}
          sx={{
            display: isMobileScreen ? "none" : "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            onClick={() => history.push("/dashboard")}
            className={
              location === "/dashboard"
                ? " header-text-item"
                : "header-text-item-fade"
            }
          >
            Home
          </Typography>
          <Typography
            onClick={() => history.push("/help")}
            className={
              location === "/help"
                ? " header-text-item"
                : "header-text-item-fade"
            }
          >
            Help And Support
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

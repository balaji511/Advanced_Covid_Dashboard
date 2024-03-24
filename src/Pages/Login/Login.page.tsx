import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import RButton from "../../Core/RButton/RButton.component";
import "./Login.css";
import { useContext, useEffect, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AdminPanelSettingsSharpIcon from "@mui/icons-material/AdminPanelSettingsSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import ExpandLessSharpIcon from "@mui/icons-material/ExpandLessSharp";
import VpnKeySharpIcon from "@mui/icons-material/VpnKeySharp";

import {
  IMobileDisplayContextType,
  MobileDisplayContext,
} from "../../Context/MobileDisplay.content";
import RHeaderBoldText from "../../Core/RBoldText/RBoldText.component";
import RText from "../../Core/RText/RText.component";
import RInputWithLabel from "../../Core/RInputWithLabel/RInputWithLabel.component";
import RPopup from "../../Core/RPopup/RPopup.component";
import { IUserObject } from "../../Types/Interfaces/Login.types";
import { userObject } from "../../ModelData/Login.model";
import { verifyUser } from "../../utilities/Apis/apis";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [userObj, setUserObj] = useState<IUserObject>(userObject);
  const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [expandDemoContent, setExpandDemoContent] = useState<boolean>(false);
  const [popupFlag, setPopupFlag] = useState<boolean>(false);
  const [loginBtnDisabled, setLoginBtnDisabled] = useState<boolean>(false);
  const history = useHistory();

  const { isMobileScreen } =
    useContext<IMobileDisplayContextType>(MobileDisplayContext);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setExpandDemoContent(false);
    setTabIndex(newValue);
    if (newValue === 1) {
      setIsAdminLogin(true);
    } else {
      setIsAdminLogin(false);
    }
  };

  const AdminView = () => {
    return (
      <>
        <RInputWithLabel
          label="Admin Id"
          required={true}
          value={""}
          name={""}
          valid={true}
        />
        <RInputWithLabel
          label="One Time Code"
          required={true}
          type={"password"}
          value={""}
          name={""}
        />
        <Stack width={"100%"} direction={"row"} gap={2} mt={2}>
          <RButton
            label={isMobileScreen ? "Admin" : "Admin Login"}
            variant="contained"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<AdminPanelSettingsIcon fontSize="small" />}
            clickHandler={() => {}}
          />
          <RButton
            label={isMobileScreen ? "Code" : "Get Code"}
            variant="outlined"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<VpnKeySharpIcon fontSize="small" />}
            clickHandler={() => {}}
          />
        </Stack>
      </>
    );
  };
  const userView = () => {
    return (
      <>
        <RInputWithLabel
          name={userObj.username.fieldName}
          valid={userObj.username.valid}
          label={userObj.username.label}
          required={userObj.password.required}
          value={userObj.username.value}
        />
        <RInputWithLabel
          name={userObj.username.fieldName}
          valid={userObj.password.valid}
          label={userObj.password.label}
          required={userObj.password.required}
          value={userObj.password.value}
          type={"password"}
        />
        <Typography color={"red"} sx={{ textDecoration: "underline" }}>
          Forgot Password
        </Typography>
        <Stack width={"100%"} direction={"row"} gap={2} mt={2}>
          <RButton
            label="Login"
            variant="contained"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<LockOpenIcon fontSize="small" />}
            clickHandler={handleLoginClick}
            isDisabled={loginBtnDisabled}
          />
          <RButton
            label="Sign up"
            variant="outlined"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<AddCircleOutlineIcon fontSize="small" />}
            clickHandler={() => history.push("/signup")}
          />
        </Stack>
      </>
    );
  };

  const demoContent = (
    <>
      <Typography mt={1} mb={2}>
        Demo {isAdminLogin && "Admin"} credentials offer Temporary access for
        testing.
      </Typography>
      <RButton
        label="Geneate"
        variant="outlined"
        fullWidth={true}
        clickHandler={() => setPopupFlag(true)}
      />
    </>
  );

  const handleSetUserObjState = () => {
    const tempUser = userObj;
    tempUser.username.value = "rahul";
    tempUser.password.value = "rahul@2021";
    tempUser.username.valid = true;
    tempUser.password.valid = true;
    setUserObj(tempUser);
    setPopupFlag(false);
    setExpandDemoContent(false);
  };

  const handleLoginClick = async () => {
    if (userObj.password.value === "" && userObj.username.value === "") {
      setUserObj((p) => ({
        ...p,
        password: { ...p.password, valid: false },
        username: { ...p.username, valid: false },
      }));
    } else {
      setLoginBtnDisabled(true);
      const verifyUserRes = await verifyUser({
        username: userObj.username.value,
        password: userObj.password.value,
      });
      if (verifyUserRes?.success) {
        localStorage.setItem("accessToken", verifyUserRes.loginData.jwt_token);
        history.push("/dashboard");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <div className="login-container">
      <Card
        className={`login-container-card ${
          expandDemoContent && "login-container-card-move-top"
        }`}
        elevation={3}
      >
        <Stack>
          <Tabs value={tabIndex} onChange={handleTabChange}>
            <Tab
              sx={{ width: "50%" }}
              label={isMobileScreen ? <AccountCircleSharpIcon /> : "User"}
              icon={
                !isMobileScreen ? (
                  <AccountCircleSharpIcon fontSize="medium" />
                ) : (
                  ""
                )
              }
              iconPosition="start"
            />
            <Tab
              sx={{ width: "50%" }}
              label={isMobileScreen ? <AdminPanelSettingsSharpIcon /> : "Admin"}
              icon={
                !isMobileScreen ? (
                  <AdminPanelSettingsIcon fontSize="medium" />
                ) : (
                  ""
                )
              }
              iconPosition="start"
            />
          </Tabs>
        </Stack>
        <CardContent>
          <RHeaderBoldText>
            {`${isAdminLogin ? "CVD Admin" : "CVD User"} Login`}
          </RHeaderBoldText>
          <RText mb={2}>
            {isAdminLogin
              ? "Administration Login"
              : "Need to login to view the content"}
          </RText>
          {isAdminLogin ? AdminView() : userView()}
        </CardContent>
      </Card>
      <Card className="login-container-pass-text" elevation={3}>
        <CardContent>
          <Typography
            fontWeight={"bold"}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            Demo {isAdminLogin && "Admin"} Credentials
            <Tooltip title="click">
              <IconButton
                onClick={() => setExpandDemoContent(!expandDemoContent)}
              >
                {expandDemoContent ? (
                  <ExpandMoreSharpIcon />
                ) : (
                  <ExpandLessSharpIcon />
                )}
              </IconButton>
            </Tooltip>
          </Typography>
          {expandDemoContent && demoContent}
        </CardContent>
      </Card>
      <RPopup
        parentClassName="popup-demo-creds"
        openFlag={popupFlag}
        closeHandler={() => setPopupFlag(false)}
      >
        <RHeaderBoldText>
          Demo {isAdminLogin && "Admin"} Credentials
        </RHeaderBoldText>
        <RText>Use of Demo Creds</RText>
        <RText>
          Access demo credentials from application documentation or login page.
          Enter provided username and password. Explore application features
          with demo account.
        </RText>
        <Typography fontWeight={"bold"} mt={1}>
          Username : Rahul
        </Typography>
        <Typography fontWeight={"bold"} mt={1} mb={2}>
          {isAdminLogin ? "Code" : "Password"} : Rahul@2021
        </Typography>
        <RButton
          variant="contained"
          label="Copy To ClipBoard"
          clickHandler={handleSetUserObjState}
        />
      </RPopup>
    </div>
  );
};

export default Login;

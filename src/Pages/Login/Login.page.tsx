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
import { useContext, useState } from "react";
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

const Login = () => {
  const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [expandDemoContent, setExpandDemoContent] = useState<boolean>(false);

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
        <RInputWithLabel label="Admin Id" required={true} />
        <RInputWithLabel
          label="One Time Code"
          required={true}
          type={"password"}
        />
        <Stack width={"100%"} direction={"row"} gap={2} mt={2}>
          <RButton
            label={isMobileScreen ? "Admin" : "Admin Login"}
            variant="contained"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<AdminPanelSettingsIcon fontSize="small" />}
          />
          <RButton
            label={isMobileScreen ? "Code" : "Get Code"}
            variant="outlined"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<VpnKeySharpIcon fontSize="small" />}
          />
        </Stack>
      </>
    );
  };
  const userView = () => {
    return (
      <>
        <RInputWithLabel label="User Name" required={true} />
        <RInputWithLabel label="Password" required={true} type={"password"} />
        <Stack width={"100%"} direction={"row"} gap={2} mt={2}>
          <RButton
            label="Login"
            variant="contained"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<LockOpenIcon fontSize="small" />}
          />
          <RButton
            label="Sign up"
            variant="outlined"
            fullWidth={true}
            spacing={isMobileScreen ? false : true}
            icon={<AddCircleOutlineIcon fontSize="small" />}
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
      <RButton label="Geneate" variant="outlined" fullWidth={true} />
    </>
  );

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
    </div>
  );
};

export default Login;

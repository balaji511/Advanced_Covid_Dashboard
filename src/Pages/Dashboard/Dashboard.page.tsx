import { Container, Grid, TextField } from "@mui/material";
import React, { useContext } from "react";
import {
  bgBlueColor,
  bgColor,
  bgGrayColor,
  bgGreenColor,
  bgLight,
  bgRedColor,
  blueColor,
  grayColor,
  greenColor,
  redColor,
} from "../../utilities/Theme";
import {
  IMobileDisplayContextType,
  MobileDisplayContext,
} from "../../Context/MobileDisplay.content";
import "../Dashboard/Dashboard.css";
import ResultsOverview, {
  IResultCard,
} from "./ResultsOverview/ResultsOverview.commponent";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import EnhancedEncryptionOutlinedIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import MasksOutlinedIcon from "@mui/icons-material/MasksOutlined";

export const overViewCardItems: IResultCard[] = [
  {
    cardLabel: "Confirmed",
    cardResultCount: "120",
    cardIcon: <CheckCircleOutlinedIcon fontSize="large" />,
    cardColor: redColor,
    bgColor: bgRedColor,
  },
  {
    cardIcon: <VerifiedUserOutlinedIcon fontSize="large" />,
    cardLabel: "Active",
    cardColor: blueColor,
    cardResultCount: "10000",
    bgColor: bgBlueColor,
  },
  {
    cardLabel: "Recovered",
    cardResultCount: "120",
    cardIcon: <EnhancedEncryptionOutlinedIcon fontSize="large" />,
    cardColor: greenColor,
    bgColor: bgGreenColor,
  },
  {
    cardIcon: <MasksOutlinedIcon fontSize="large" />,
    cardLabel: "Deceased",
    cardColor: grayColor,
    cardResultCount: "10000",
    bgColor: bgGrayColor,
  },
];

const Dashboard: React.FC<any> = () => {
  const { isMobileScreen } =
    useContext<IMobileDisplayContextType>(MobileDisplayContext);
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        bgcolor: bgColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingBlock: 6,
      }}
    >
      <Grid container>
        <Grid item xs={isMobileScreen ? 0 : 3}></Grid>
        <Grid
          item
          xs={isMobileScreen ? 12 : 6}
          sx={{
            bgcolor: bgLight,
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            placeholder={"Search For State"}
            focused
            fullWidth
            inputProps={{
              style: { color: "white" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid container width={isMobileScreen ? "100%" : "80%"}>
            {overViewCardItems.map((x) => (
              <Grid item xs={isMobileScreen ? 5.5 : 2.8} m={1}>
                <ResultsOverview {...x} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

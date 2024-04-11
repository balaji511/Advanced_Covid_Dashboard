import { Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
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
import ResponseMapper, { IStateData } from "../../Mappers/Response.mapper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const overViewCardItems: IResultCard[] = [
  {
    cardLabel: "Confirmed",
    cardResultCount: "0",
    cardIcon: <CheckCircleOutlinedIcon fontSize="large" />,
    cardColor: redColor,
    bgColor: bgRedColor,
  },
  {
    cardIcon: <VerifiedUserOutlinedIcon fontSize="large" />,
    cardLabel: "Active",
    cardColor: blueColor,
    cardResultCount: "0",
    bgColor: bgBlueColor,
  },
  {
    cardLabel: "Recovered",
    cardResultCount: "0",
    cardIcon: <EnhancedEncryptionOutlinedIcon fontSize="large" />,
    cardColor: greenColor,
    bgColor: bgGreenColor,
  },
  {
    cardIcon: <MasksOutlinedIcon fontSize="large" />,
    cardLabel: "Deceased",
    cardColor: grayColor,
    cardResultCount: "0",
    bgColor: bgGrayColor,
  },
];

const columns: GridColDef[] = [
  {
    headerName: "State Name",
    field: "stateName",
    cellClassName: "cell",
    headerClassName: "header-cell-1",
    pinnable: true,
    sortable: true,
    width: 250,
  },
  {
    headerName: "Active",
    field: "active",
    cellClassName: "cell",
    headerClassName: "header-cell",
    renderCell: (data) => <>{data.row.total.active}</>,
    width: 150,
  },
  {
    headerName: "Deceased",
    field: "deceased",
    cellClassName: "cell",
    headerClassName: "header-cell",
    renderCell: (data) => <>{data.row.total.deceased}</>,

    width: 150,
  },
  {
    headerName: "Recovered",
    field: "Recovered",
    cellClassName: "cell",
    headerClassName: "header-cell",
    renderCell: (data) => <>{data.row.total.recovered}</>,
    width: 150,
  },
  {
    headerName: "Population",
    field: "population",
    cellClassName: "cell",
    headerClassName: "header-cell",
    renderCell: (data) => <>{data.row.total.population}</>,
    width: 150,
  },
  {
    headerName: "Tested",
    field: "tested",
    cellClassName: "cell",
    headerClassName: "header-cell",
    renderCell: (data) => <>{data.row.total.tested}</>,
    width: 150,
  },
];

const Dashboard: React.FC<any> = () => {
  const { isMobileScreen } =
    useContext<IMobileDisplayContextType>(MobileDisplayContext);
  const [covidData, setCovidData] = useState<IStateData[] | null>(null);

  const getCovidRecords = async () => {
    const api = "https://apis.ccbp.in/covid19-state-wise-data";
    const response = await fetch(api, { method: "GET" });
    const data = await response.json();
    const responseData = ResponseMapper(data);
    setCovidData(responseData);
  };

  useEffect(() => {
    getCovidRecords();
  }, []);
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        bgcolor: bgColor,
        minHeight: "100vh",
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
              <Grid item xs={isMobileScreen ? 5.3 : 2.5} m={1}>
                <ResultsOverview {...x} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={isMobileScreen ? 12 : 12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <div style={{ width: "100%", color: "wheat" }}>
            {covidData && <DataGrid rows={covidData!} columns={columns} />}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

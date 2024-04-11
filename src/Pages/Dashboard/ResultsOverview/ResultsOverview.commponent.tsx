import { Box, Typography } from "@mui/material";
import React from "react";
import RLoader from "../../../Core/RLoader/RLoader.Component";

export interface IResultCard {
  cardLabel: string;
  cardResultCount: string;
  cardIcon: any;
  cardColor: string;
  isContained?: boolean;
  bgColor?: string;
}

const ResultsOverview: React.FC<IResultCard> = ({
  cardIcon,
  cardLabel,
  cardResultCount,
  cardColor,
  isContained,
  bgColor,
}: IResultCard) => {
  const renderSeverity = () => {
    switch (cardLabel) {
      case "Confirmed":
        return "warning";
      case "Deceased":
        return "secondary";
      case "Active":
        return "info";
      case "Recovered":
        return "success";
      default:
        return "info";
    }
  };
  return (
    <Box
      sx={{
        color: cardColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        bgcolor: isContained ? bgColor : "none",
        padding: 2,
        borderRadius: 4,
      }}
    >
      <Typography fontWeight={"bold"}>{cardLabel}</Typography>
      {cardIcon}
      <Typography fontSize={20}>
        {cardResultCount === "0" ? (
          <RLoader severity={renderSeverity()} />
        ) : (
          cardResultCount
        )}
      </Typography>
    </Box>
  );
};

export default ResultsOverview;

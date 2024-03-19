import { Typography } from "@mui/material";

const RHeaderBoldText = ({ children }: any) => {
  return (
    <Typography variant="h5" fontWeight={"bold"}>
      {children}
    </Typography>
  );
};

export default RHeaderBoldText;

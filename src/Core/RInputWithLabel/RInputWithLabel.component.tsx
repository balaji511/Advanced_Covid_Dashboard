import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

interface IInputWithLabel {
  label: string;
  required?: boolean;
  type?: string;
}

const RInputWithLabel = ({
  label,
  required = false,
  type = "text",
}: IInputWithLabel) => {
  return (
    <Stack marginBlock={1.5}>
      <Typography mb={1}>
        {label} <span style={{ color: "red" }}>{required && "*"}</span>
      </Typography>
      <TextField fullWidth size="small" type={type} />
    </Stack>
  );
};

export default RInputWithLabel;

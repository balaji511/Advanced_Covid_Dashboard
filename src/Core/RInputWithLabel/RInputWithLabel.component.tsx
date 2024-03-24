import { Stack, TextField, Typography } from "@mui/material";

interface IInputWithLabel {
  label: string;
  value: string;
  name: string;
  required?: boolean;
  type?: string;
  valid?: boolean;
}

const RInputWithLabel = ({
  label,
  required = false,
  type = "text",
  value,
  valid = true,
  name,
}: IInputWithLabel) => {
  return (
    <Stack marginBlock={1.5}>
      <Typography mb={1} sx={{ color: valid ? "" : "red" }}>
        {label} <span style={{ color: "red" }}>{required && "*"}</span>
      </Typography>
      <TextField
        name={name}
        fullWidth
        size="small"
        type={type}
        value={value}
        error={!valid}
      />
      {!valid && (
        <Typography color={"red"}>{label} is Manadatory Field</Typography>
      )}
    </Stack>
  );
};

export default RInputWithLabel;

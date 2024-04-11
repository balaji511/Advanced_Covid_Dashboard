import { CircularProgress } from "@mui/material";

interface IProps {
  severity?:
    | "info"
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "warning"
    | "inherit";
}

const RLoader = ({ severity = "info" }: IProps) => {
  return (
    <div>
      <CircularProgress size={20} color={severity} />
    </div>
  );
};

export default RLoader;

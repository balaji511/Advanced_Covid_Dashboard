import { Button } from "@mui/material";
interface IButtonProps {
  label: string;
  variant: "text" | "outlined" | "contained";
  fullWidth?: boolean;
  icon?: any;
  spacing?: boolean;
}

const RButton = ({
  variant,
  label,
  fullWidth = false,
  icon,
  spacing = true,
}: IButtonProps) => {
  return (
    <Button
      variant={variant}
      sx={{
        paddingInline: spacing ? 6 : 0,
        width: fullWidth ? "100%" : "auto",
        display: "flex",
        alignItems: "center",
      }}
      size="large"
      startIcon={icon}
    >
      {label}
    </Button>
  );
};

export default RButton;

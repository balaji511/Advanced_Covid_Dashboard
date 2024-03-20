import { Dialog, DialogTitle, IconButton } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

interface IRPopup {
  parentClassName: string;
  children: any;
  openFlag: boolean;
  closeHandler: () => void;
}

const RPopup = ({
  parentClassName,
  children,
  openFlag,
  closeHandler,
}: IRPopup) => {
  return (
    <Dialog
      open={openFlag}
      classes={{ container: parentClassName }}
      PaperProps={{
        classes: { root: "paperRoot" },
        sx: {
          maxWidth: "unset",
          boxSizing: "border-box",
          margin: 0,
        },
      }}
    >
      <DialogTitle
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          padding: 0,
          lineHeight: 0,
        }}
      >
        <IconButton onClick={closeHandler}>
          <CloseSharpIcon />
        </IconButton>
      </DialogTitle>
      {children}
    </Dialog>
  );
};

export default RPopup;

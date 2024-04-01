import { FormControlLabel, Grid } from "@mui/material";
import React, { useContext } from "react";
import RInputWithLabel from "../../../../Core/RInputWithLabel/RInputWithLabel.component";
import {
  IMobileDisplayContextType,
  MobileDisplayContext,
} from "../../../../Context/MobileDisplay.content";
import RHeaderBoldText from "../../../../Core/RBoldText/RBoldText.component";
import { CheckBox } from "@mui/icons-material";

const ContactInformation: React.FC<any> = () => {
  const { isMobileScreen } =
    useContext<IMobileDisplayContextType>(MobileDisplayContext);
  return (
    <Grid container width={"100%"} mt={6} spacing={1}>
      <Grid item xs={12}>
        <RHeaderBoldText>2.Contact Information</RHeaderBoldText>
      </Grid>
      <Grid item sm={isMobileScreen ? 12 : 6} width={"100%"}>
        <RInputWithLabel label="Email Address" value={""} name={""} />
      </Grid>
      <Grid item sm={isMobileScreen ? 12 : 6} width={"100%"}>
        <RInputWithLabel label="Confirm Email Address" value={""} name={""} />
      </Grid>{" "}
      <Grid item sm={isMobileScreen ? 12 : 2} width={"100%"}>
        <RInputWithLabel label="State" value={""} name={""} />
      </Grid>
      <Grid item sm={isMobileScreen ? 12 : 2} width={"100%"}>
        <RInputWithLabel label="Code" value={""} name={""} placeHolder="+91" />
      </Grid>{" "}
      <Grid item sm={isMobileScreen ? 12 : 6} width={"100%"}>
        <RInputWithLabel label="Phone Number" value={""} name={""} />
      </Grid>
      <Grid
        item
        sm={isMobileScreen ? 12 : 2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <div
          style={{
            position: "relative",
            top: "16px",
            marginLeft: isMobileScreen ? "8px" : "16px",
          }}
        >
          <FormControlLabel
            label="SMS notification"
            control={<CheckBox color="primary" />}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactInformation;

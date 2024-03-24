import { Grid } from "@mui/material";
import React, { useContext } from "react";
import RInputWithLabel from "../../../../Core/RInputWithLabel/RInputWithLabel.component";
import {
  IMobileDisplayContextType,
  MobileDisplayContext,
} from "../../../../Context/MobileDisplay.content";
import RHeaderBoldText from "../../../../Core/RBoldText/RBoldText.component";

const UserInformation: React.FC<any> = () => {
  const { isMobileScreen } =
    useContext<IMobileDisplayContextType>(MobileDisplayContext);
  return (
    <Grid container width={"100%"} mt={6} spacing={1}>
      <Grid item xs={12}>
        <RHeaderBoldText>1.User Information</RHeaderBoldText>
      </Grid>
      <Grid item sm={isMobileScreen ? 12 : 6} width={"100%"}>
        <RInputWithLabel label="First Name" value={""} name={""} />
      </Grid>
      <Grid item sm={isMobileScreen ? 12 : 6} width={"100%"}>
        <RInputWithLabel label="Last Name" value={""} name={""} />
      </Grid>{" "}
      <Grid item sm={isMobileScreen ? 12 : 6} width={"100%"}>
        <RInputWithLabel label="User Name" value={""} name={""} />
      </Grid>{" "}
      <Grid item sm={isMobileScreen ? 12 : 3} width={"100%"}>
        <RInputWithLabel
          label="Date Of Birth"
          value={""}
          name={""}
          type="date"
        />
      </Grid>
      <Grid item sm={isMobileScreen ? 12 : 3} width={"100%"}>
        <RInputWithLabel label="Gender" value={""} name={""} />
      </Grid>{" "}
    </Grid>
  );
};

export default UserInformation;

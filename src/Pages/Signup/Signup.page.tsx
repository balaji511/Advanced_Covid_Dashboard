import {
  Container,
  Grid,
  MobileStepper,
  Step,
  StepButton,
  StepLabel,
  Stepper,
} from "@mui/material";
import { useState } from "react";
import RButton from "../../Core/RButton/RButton.component";
import UserInformation from "./Components/UserInformation/UserInformation.component";
import ContactInformation from "./Components/ContactInformation/ContactInformation.component";

const steps = [
  { mobilelabel: "User", label: "User Information", key: 0 },
  { mobilelabel: "Review", label: "Review and Confirmation", key: 1 },
  { mobilelabel: "Account", label: "Account Creation Status", key: 2 },
];

const Signup = () => {
  const [activeStep, setactiveStep] = useState(0);
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Grid container>
        <Grid item sm={12} mt={6}>
          <Stepper activeStep={activeStep}>
            {steps.map((x) => (
              <Step key={x.label}>
                <StepLabel color="inherit">{x.mobilelabel}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item sm={12} width={"100%"}>
          <UserInformation />
        </Grid>{" "}
        <Grid item sm={12}>
          <ContactInformation />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;

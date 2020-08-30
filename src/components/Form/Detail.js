import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddressInputField from "./AddressInputField";
import Grid from "@material-ui/core/Grid";
import InputField from "./InputField";
import LanguageFormIcon from "../Icons/LanguageFormIcon";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AccountCircleFormIcon from "../Icons/AccountCircleFormIcon";
import CakeFormIcon from "../Icons/CakeFormIcon";
import EmailFormIcon from "../Icons/EmailFormIcon";
import PhoneFormIcon from "../Icons/PhoneFormIcon";

const AccordionDetails = withStyles({
  root: {
    paddingBottom: 22,
    paddingLeft: 56,
    paddingRight: 56
  }
})(MuiAccordionDetails);

function Detail() {
  const [address, setAddress] = React.useState("");

  return (
    <AccordionDetails>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputField label="First Name" required={true} icon={<AccountCircleFormIcon />} />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Last Name" required={true} icon={<AccountCircleFormIcon />} />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Date of Birth" required={true} icon={<CakeFormIcon />} />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Contact Language" required={true} icon={<LanguageFormIcon />} />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Phone" required={true} icon={<PhoneFormIcon />} />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Email" required={true} icon={<EmailFormIcon />} />
        </Grid>

        <Grid className="form-detail-address-container" item xs={12}>
          <AddressInputField />
        </Grid>

        <Grid item xs={12}>
          <InputField label="Notes/Reason" />
        </Grid>
      </Grid>
    </AccordionDetails>
  );
}

export default Detail;

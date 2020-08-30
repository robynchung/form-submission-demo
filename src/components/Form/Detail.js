import React, { useContext } from "react";
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
import FormContext from "../../contexts/Form";

const AccordionDetails = withStyles({
  root: {
    paddingBottom: 22,
    paddingLeft: 56,
    paddingRight: 56
  }
})(MuiAccordionDetails);

function Detail() {
  const context = useContext(FormContext.Context);

  return (
    <AccordionDetails>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <InputField
            icon={<AccountCircleFormIcon />}
            label="First Name"
            onChange={event => context.setStateValue("firstName", event.target.value)}
            required={true}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Last Name"
            onChange={event => context.setStateValue("lastName", event.target.value)}
            required={true}
            icon={<AccountCircleFormIcon />}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Date of Birth"
            onChange={event => context.setStateValue("birthDate", event.target.value)}
            required={true}
            icon={<CakeFormIcon />}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField
            label="Contact Language"
            onChange={event => context.setStateValue("language", event.target.value)}
            required={true}
            icon={<LanguageFormIcon />}
          />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Phone" required={true} onChange={event => context.setStateValue("phone", event.target.value)} icon={<PhoneFormIcon />} />
        </Grid>

        <Grid item xs={6}>
          <InputField label="Email" onChange={event => context.setStateValue("eMail", event.target.value)} required={true} icon={<EmailFormIcon />} />
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

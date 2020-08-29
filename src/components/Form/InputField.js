import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

function InputField() {
  return (
    <Grid item xs={6}>
      <FormControl>
        <InputLabel htmlFor="component-helper">Name</InputLabel>
        <Input id="component-helper" aria-describedby="component-helper-text" />
        <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
      </FormControl>
    </Grid>
  );
}
export default InputField;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlacesAutocomplete from "react-places-autocomplete";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";

const useStyles = makeStyles(theme => ({}));

function App() {
  const classes = useStyles();
  const [address, setAddress] = useState("");

  const onChangeAddressSearch = () => {};
  return (
    <div>
      <header>Patient Referral Form Hayes Valley Health San Francisco</header>

      <h1>
        Referral Patients
        <br />
        You can add up to five patients at a time
      </h1>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <DeleteIcon />
        </AccordionSummary>
        <AccordionDetails>
          <div></div>
          <form className={classes.root} style={{ width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="component-helper">Name</InputLabel>
                  <Input id="component-helper" aria-describedby="component-helper-text" />
                  <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl>
                  <InputLabel htmlFor="component-helper">Name</InputLabel>
                  <Input id="component-helper" aria-describedby="component-helper-text" />
                  <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <PlacesAutocomplete
                  value={address}
                  onChange={value => {
                    setAddress(value);
                  }}
                  onSelect={event => console.log(event)}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: "Search Places ...",
                          className: "location-search-input"
                        })}
                      />
                      <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                          const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                          // inline style for demonstration purpose
                          const style = suggestion.active
                            ? { backgroundColor: "#fafafa", cursor: "pointer" }
                            : { backgroundColor: "#ffffff", cursor: "pointer" };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, {
                                className,
                                style
                              })}
                            >
                              <span>{suggestion.description}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>
              </Grid>
            </Grid>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;

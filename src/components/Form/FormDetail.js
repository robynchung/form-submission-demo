import React from "react";
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";
import PlacesAutocomplete from "react-places-autocomplete";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

function FormDetail() {
  const [address, setAddress] = React.useState("");

  return (
    <AccordionDetails>
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
    </AccordionDetails>
  );
}

export default FormDetail;

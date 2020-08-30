import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import Grid from "@material-ui/core/Grid";

import MuiInput from "@material-ui/core/Input";
import MuiInputLabel from "@material-ui/core/InputLabel";

import InputField from "./InputField";

function AddressInputField() {
  const [address, setAddress] = React.useState("");

  return (
    <PlacesAutocomplete
      onChange={value => {
        setAddress(value);
      }}
      value={address}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        console.log(getInputProps);

        return (
          <>
            <InputField label="Address" getInputProps={getInputProps} width={12} required={true} />
            <div className="form-address-input-field-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active ? "form-address-input-field-selected" : "form-address-input-field-normal";
                const style = suggestion.active ? { backgroundColor: "#DFEDF0" } : { backgroundColor: "#ffffff" };
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
          </>
        );
      }}
    </PlacesAutocomplete>
  );
}

export default AddressInputField;

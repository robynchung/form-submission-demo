import React, { Component, createContext } from "react";

const Context = createContext({});

class FormProvider extends Component {
  state = {
    address: "",
    birthDate: "",
    eMail: "",
    firstName: "",
    isSuccess: false,
    language: "",
    lastName: "",
    note: "",
    phone: "",
    referral: []
  };

  setStateValue = (name, value) => {
    this.setState({ [name]: value });
  };

  onClickAddReferal = event => {
    event.preventDefault();

    if (this.state.referral.length <= 5) {
      this.setState({
        address: "",
        birthDate: "",
        eMail: "",
        firstName: "",
        isSuccess: false,
        lastName: "",
        note: ""
      });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onClickAddReferal: this.onClickAddReferal,
          setStateValue: this.setStateValue
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default {
  Consumer: Context.Consumer,
  Context,
  Provider: FormProvider
};

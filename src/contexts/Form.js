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

  removeReferral = index => {
    const newReferral = [...this.state.referral];

    newReferral.splice(index, 1);

    this.setState({ referral: newReferral });
  };

  onClickAddReferal = event => {
    event.preventDefault();

    const { address, birthDate, eMail, firstName, language, lastName, note, phone } = this.state;

    if (address && birthDate && eMail && firstName && language && lastName && phone) {
      this.setState({
        referral: [...this.state.referral, { firstName, lastName, birthDate, language, phone, eMail, address, note }]
      });

      if (this.state.referral.length <= 5) {
        this.setState(
          {
            address: "",
            birthDate: "",
            eMail: "",
            firstName: "",
            isSuccess: false,
            language: "",
            lastName: "",
            note: "",
            phone: ""
          },
          () => console.log(this.state)
        );
      }
    } else {
      alert("please fill the form");
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
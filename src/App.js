import React, { useState } from "react";

// core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";

// components
import PageName from "./components/PageName";
import Header from "./components/Header";
import FormSummary from "./components/Form/FormSummary";
import FormDetail from "./components/Form/FormDetail";
import Message from "./components/Message";

const Accordion = withStyles({
  root: {
    borderRadius: 4,
    boxShadow: "none",
    marginBottom: 8,
    overflow: "hidden",

    "&$expanded": {
      margin: 0
    }
  }
})(MuiAccordion);

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="body-wrapper">
      <PageName />

      {isSuccess && <Message />}

      <main className="container">
        <Header />

        <form style={{ width: "100%" }}>
          <Accordion>
            <FormSummary />
            <FormDetail />
          </Accordion>

          <Accordion>
            <FormSummary />
            <FormDetail />
          </Accordion>
        </form>
        <button>+ ADD ANOTHER PATIENT</button>
        <button>SEND REFERRALS</button>
      </main>
    </div>
  );
}

export default App;

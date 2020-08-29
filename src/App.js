import React, { useState } from "react";

// core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";

// components
import PageName from "./components/PageName";
import Header from "./components/Header";
import Summary from "./components/Form/Summary";
import Detail from "./components/Form/Detail";
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
            <Summary />
            <Detail />
          </Accordion>

          <Accordion>
            <Summary />
            <Detail />
          </Accordion>
        </form>
        <button>+ ADD ANOTHER PATIENT</button>
        <button>SEND REFERRALS</button>
      </main>
    </div>
  );
}

export default App;

import React from "react";

// core
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";

// components
import PageName from "./components/PageName";
import Header from "./components/Header";
import FormSummary from "./components/Form/FormSummary";
import FormDetail from "./components/Form/FormDetail";
import Message from "./components/Message";

const useStyles = makeStyles(theme => ({}));

function App() {
  const classes = useStyles();

  return (
    <div className="body-wrapper">
      <PageName />

      <Message />

      <main className="container">
        <Header />

        <form className={classes.root} style={{ width: "100%" }}>
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

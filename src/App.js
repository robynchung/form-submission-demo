import React from "react";

// core
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";

// components
import PageName from "./components/PageName";
import Header from "./components/Header";
import FormSummary from "./components/FormSummary";
import FormDetail from "./components/FormDetail";

const useStyles = makeStyles(theme => ({}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <PageName />

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
      <button>SEND REFERRALS</button>
    </div>
  );
}

export default App;

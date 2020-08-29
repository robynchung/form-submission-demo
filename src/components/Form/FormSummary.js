import React from "react";
import { makeStyle, withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";

import DeleteIcon from "../Icons/DeleteIcon";
import ExpandMoreIcon from "../Icons/ExpandMoreIcon";
import NameTitle from "../Form/NameTitle";

const AccordionSummary = withStyles({
  root: {
    paddingLeft: 0
  },
  content: {
    display: "block",
    margin: 0,

    "&$expanded": {
      margin: 0
    }
  },
  expanded: {}
})(MuiAccordionSummary);

function FormSummary() {
  const classes = withStyles();

  return (
    <AccordionSummary className={classes.root} aria-controls="panel1a-content" id="panel1a-header" expandIcon={<ExpandMoreIcon />}>
      <div className="form-summary-container">
        <div className="form-summary-title-container">
          <NameTitle number={1} />
        </div>
        <div className="form-summary-trash-can">
          <DeleteIcon />
        </div>
      </div>
    </AccordionSummary>
  );
}

export default FormSummary;

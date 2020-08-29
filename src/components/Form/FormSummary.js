import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";

function FormSummary() {
  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
      <div>
        <span>New Referral</span>
      </div>
      <div>
        <DeleteIcon />
      </div>
    </AccordionSummary>
  );
}

export default FormSummary;

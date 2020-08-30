import React from "react";

function NameTitle(props) {
  const { number, selected } = props;
  const title = props?.title || "New Referral";

  return (
    <>
      <span className={`number-container${selected ? " expended" : ""}`}>{number}</span>
      <div>
        <span className="form-summary-new-referral">{title}</span>
      </div>
    </>
  );
}

export default NameTitle;

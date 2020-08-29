import React from "react";

function NameTitle(props) {
  const { number } = props;
  const title = props?.title || "New Referral";

  return (
    <>
      <span className="number-container">{number}</span>
      <div>
        <span className="form-summary-new-referral">{title}</span>
      </div>
    </>
  );
}

export default NameTitle;

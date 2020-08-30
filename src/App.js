import React, { useState } from "react";

// components
import PageName from "./components/PageName";
import Header from "./components/Header";
import Message from "./components/Message";
import Container from "./components/Form/Cotainer";
import Button from "./components/Button";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
  };

  return (
    <div className="body-wrapper">
      <PageName />

      {isSuccess && <Message />}

      <main className="container">
        <Header />
        <form style={{ width: "100%" }} onSubmit={event => onSubmit(event)}>
          <Container />

          <Container />

          <div className="button-container">
            <button className="button-add-patient">+ ADD ANOTHER PATIENT</button>
            <Button className="button-send" description="SEND REFERRALS" type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;

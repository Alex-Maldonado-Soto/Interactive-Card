import { Button, Container, Card } from "@mui/material";
import { BackgroundDecoration } from "./components/BackgroundDecoration";
import Form from "./components/Form";
import Thank from "./components/thank";
import { useState } from "react";

export default function App() {
  const [cardName, setCardName] = useState("");

  const name = (newName) => {
    setCardName(newName);
  };

  const [cardNumber, setCardNumber] = useState("");

  const number = (newNumber) => {
    setCardNumber(newNumber);
  };

  const [month, setMonth] = useState("");

  const monthC = (newMonth) => {
    setMonth(newMonth);
  };

  const [year, setYear] = useState("");

  const yearC = (newYear) => {
    setYear(newYear);
  };

  const [cvc, setCvc] = useState("");

  const cvcC = (newCvc) => {
    setCvc(newCvc);
  };

  return (
    <>
      <Card
        component="main"
        sx={{ height: "100vh", fontFamily: "Space Grotesk" }}
      >
        <BackgroundDecoration
          cardName={cardName}
          month={month}
          cardNumber={cardNumber}
          year={year}
          cvc={cvc}
        />
        <Form
          name={name}
          monthC={monthC}
          number={number}
          yearC={yearC}
          cvcC={cvcC}
        />
        <Thank />
      </Card>
    </>
  );
}

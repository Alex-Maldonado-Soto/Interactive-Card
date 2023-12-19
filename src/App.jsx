import { Button, Container, Card, Box } from "@mui/material";
import { BackgroundDecoration } from "./components/BackgroundDecoration";
import Form from "./components/Form";
import Thank from "./components/thank";
import { useState } from "react";

export default function App() {
  const [cardName, setCardName] = useState("Jane Appleseed");

  const name = (newName) => {
    setCardName(newName);
  };

  const [cardNumber, setCardNumber] = useState("1234567891230000");

  const number = (newNumber) => {
    setCardNumber(newNumber);
  };

  const [month, setMonth] = useState("00");

  const monthC = (newMonth) => {
    setMonth(newMonth);
  };

  const [year, setYear] = useState("00");

  const yearC = (newYear) => {
    setYear(newYear);
  };

  const [cvc, setCvc] = useState("123");

  const cvcC = (newCvc) => {
    setCvc(newCvc);
  };

  /////////////// Crea una variable mutable en react
  const [submit, setSubmit] = useState("");

  ///////Permite cambiar la variable atravez de una constante
  const sent = (newSubmit) => {
    setSubmit(newSubmit);
  };


///////////// retorna toda la maquetacion necesaria para el bloque
  return (
    <>
      <Box
        component="main"
        sx={{ height: "100vh", fontFamily: "Space Grotesk", display: {md: 'flex'}}}
      >
        <BackgroundDecoration
          cardName={cardName}
          month={month}
          cardNumber={cardNumber}
          year={year}
          cvc={cvc}
        />
        <Form
          sent={sent}
          submit={submit}
          name={name}
          monthC={monthC}
          number={number}
          yearC={yearC}
          cvcC={cvcC}
        />
        <Thank 
        submit={submit}
        />
      </Box>
    </>
  );
}

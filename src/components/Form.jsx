import { Block } from "@mui/icons-material";
import { Box, CardContent, InputLabel, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function Form({ name, number, monthC, yearC, cvcC, sent, submit }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  /////////////coloca todas las variables locales


  /////////activa una funcion que se activa cuando se envia el form
  const handleSubmit = (e) => {
    e.preventDefault();
    sent(true);
  };

  if (!submit) {
    return (
      <CardContent
        component="form"
        onSubmit={handleSubmit}
        sx={{ marginTop: {xs: '30%', md:'0'},
        margin:{md:'100px'}, 
        width: "100vw",
        display: "grid", 
        alignContent: "center",
        gap: "10px" }}
      >
        <InputLabel
          htmlFor="cardNumber"
          sx={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          CARDHOLDER NAME
        </InputLabel>
        <TextField
          id="cardName"
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={cardName}
          onChange={(e) => {
            name(e.target.value), setCardName(e.target.value);
          }}
        />
        <InputLabel
          htmlFor="cardNumber"
          sx={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          CARD NUMBER
        </InputLabel>
        <TextField
          type="number"
          id="cardNumber"
          placeholder="e.g.1234 5678 9123 0000"
          value={cardNumber}
          onChange={(e) => {
            number(e.target.value), setCardNumber(e.target.value);
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <InputLabel
            htmlFor="cardNumber" /////lo que hace es conectar el label con el input
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            EXP. DATE(MM/YY)
          </InputLabel>
          <InputLabel
            htmlFor="CVC"
            sx={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            CVC
          </InputLabel>
          <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
            <TextField
              id="Month"
              type="number"
              placeholder="MM"
              value={month}
              onChange={(e) => {
                monthC(e.target.value), setMonth(e.target.value);
              }}
            />
            <TextField
              id="Year"
              type="number"
              placeholder="YY"
              value={year}
              onChange={(e) => {
                yearC(e.target.value), setYear(e.target.value);
                /////////// coloca la informacion en una varible en eeste archivo y la otrapara exportarlo al app
                ///////////se actualica cada vez que se realiza un cambio en el form
              }}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              id="CVC"
              type="number"
              placeholder="e.g. 123"
              value={cvc}
              onChange={(e) => {
                cvcC(e.target.value), setCvc(e.target.value);
              }}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{ margin: "20px auto" }}
        >
          Confirm
        </Button>
      </CardContent>
    );
  }
}

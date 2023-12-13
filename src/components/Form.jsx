import { Block } from "@mui/icons-material";
import {
  Box,
  CardContent,
  Grid,
  Input,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

export default function Form() {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  if (true) {
    return (
      <CardContent
        component="form"
        onSubmit={handleSubmit}
        sx={{ marginTop: "30%", display: "grid", gap: "10px" }}
      >
        <InputLabel
          htmlFor="cardNumber"
          sx={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          CARDHOLDER NAME
        </InputLabel>
        <TextField id="cardName" placeholder="e.g. Jane Appleseed" />
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
            htmlFor="cardNumber"
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
            <TextField id="Month" type="number" placeholder="MM" />
            <TextField id="Year" type="number" placeholder="YY" />
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField id="CVC" type="number" placeholder="e.g. 123" />
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

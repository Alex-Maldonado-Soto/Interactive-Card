import React from "react";
import img from "../assets/images/img";
import {
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export const BackgroundDecoration = ({cardName, cardNumber, month, year, cvc}) => {
  return (
    <CardMedia
      component="header"
      sx={{
        margin: "0",
        width: "100vw",
      }}
    >
      <Box
        component="figure"
        sx={{
          position: "relative",
          height: {md:'100vh'},
          width: {md:'30vw'}
        }}
      >
        <Img src={img.bgMainMobile} alt="" />
      </Box>
      <Box
        component="figure"
        sx={{
          width: {xs: '80%', md:'30%' ,xl:'25%'},
          zIndex: "10",
          top: {xs: '40px', md:'55%'},
          right: {md:'40%'},
          left: {xs: '10%', md:'0'},
          margin: "auto",
        }}
        position={"absolute"}
      >
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          sx={{
            top: "42%",
            right: "15%",
            zIndex: 100,
            fontSize: {xs: '4vw',md:'1.54vw' , xl:'1.25vw'}
          }}
        >
          {cvc}
        </Typography>
        <Img src={img.bgCardBack} alt="" />
      </Box>
      <Box
        component="figure"
        sx={{
          width: {xs: '80%', md:'30%' ,xl:'25%'},
          zIndex: "100",
          top: {xs: '1px', md:'20vh' ,xl:'20%'},
          marginTop: "10px",
          right: "0",
          left: {xs: '-10%', md:'-55%'},
          margin:{xs: "38% auto", md:'auto'},
        }}
        position={"absolute"}
      >
        <Box
          sx={{
            width: {xs: '8vw', md:'4vw' , xl:'3vw'},
            height: {xs: '8vw', md:'4vw' , xl:'3vw'},
            position: "absolute",
            top: "15px",
            left: "10%",
            background: "var(--contrastText)",
            borderRadius: "100%",
          }}
        ></Box>
        <Box
          sx={{
            width: {xs: '3vw',md:'1.5vw' , xl:'1.5vw'},
            height: {xs: '3vw',md:'1.5vw' , xl:'1.5vw'},
            position: "absolute",
            top: "25px",
            left: "25%",
            borderRadius: "100%",
            border: "solid",
            borderWidth: "1px",
            borderColor: "var(--contrastText)",
          }}
        ></Box>
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          sx={{
            top: "75%",
            right: "10%",
            zIndex: 100,
            fontSize: {xs: '5vw',md:'1.5vw' , xl:'1.25vw'}
          }}
        >
          {month + "/" + year}
        </Typography>
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          sx={{
            top: "50%",
            left: "12%",
            zIndex: 100,
            fontSize: {xs: '5.5vw',md:'2vw' , xl:'1.75vw'}
          }}
        >
          {cardNumber}
        </Typography>
        <Typography
          position="absolute"
          variant="span"
          color="primary.contrastText"
          sx={{
            top: "75%",
            left: "10%",
            zIndex: 100,
            fontSize: {xs: '5vw',md:'1.5vw' , xl:'1.25vw'}
          }}
        >
          {cardName}
        </Typography>
        <Img src={img.bgCardFront} alt="" />
      </Box>
    </CardMedia>
  );
};

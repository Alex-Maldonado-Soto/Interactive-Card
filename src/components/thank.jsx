import styled from "@emotion/styled";
import { Button, Container, Typography, Box } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Thank() {
  if(false){
    return (
      <Container
        sx={{
          marginTop:"30%",
          display: "grid",
          justifyItems: "center",
          gap: "20px"
        }}
      >
        <CheckIcon
          sx={{
            fontSize: "60px",
            borderRadius:"100%",
            padding:"15px",
            color: "#fff",
            background: "linear-gradient(hsl(249, 99%, 64%) ,hsl(278, 94%, 30%))",
          }}
        />
        <Typography variant="H2" fontSize="1.8rem" fontWeight="bold">THAN YOU!</Typography>
        <Typography color="gray" variant="p" fontSize="1.2rem">We've added your card details</Typography>
        <Button variant="contained" fullWidth>
          Continue
        </Button>
      </Container>
    );
  }
}

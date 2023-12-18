import { Button,Typography, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Thank({submit}) {
  if (submit) {
    return (
      <Box
        sx={{
          marginTop: { xs: "30%", md: "0" },
          margin: { md: "100px" },
          width: "100vw",
          display: "grid",
          justifyItems: "center",
          justifyContent: "center",
          alignContent: "center",
          gap: "20px",
        }}
      >
        <CheckIcon
          sx={{
            fontSize: "60px",
            borderRadius: "100%",
            padding: "15px",
            color: "#fff",
            background:
              "linear-gradient(hsl(249, 99%, 64%) ,hsl(278, 94%, 30%))",
          }}
        />
        <Typography variant="H2" fontSize="1.8rem" fontWeight="bold">
          THAN YOU!
        </Typography>
        <Typography color="gray" variant="p" fontSize="1.2rem">
          We've added your card details
        </Typography>
        <Button variant="contained" fullWidth>
          Continue
        </Button>
      </Box>
    );
  }
}

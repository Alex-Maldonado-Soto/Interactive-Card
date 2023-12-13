import { Button, Container, Card } from "@mui/material";
import { BackgroundDecoration } from "./components/BackgroundDecoration";
import Form from "./components/Form";
import Thank from "./components/thank";

export default function App() {
  return (
    <>
      <Card component="main" sx={{height:"100vh",  fontFamily:"Space Grotesk"}} >
        <BackgroundDecoration />
        <Form/>
        <Thank/>
      </Card>
    </>
  );
}

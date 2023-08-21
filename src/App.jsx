import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import "./styles/style.css";
import theme from "./styles/theme";
import Header from "./sections/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{ marginBlock: "2rem", borderRadius: "1rem" }}
      >
        <Header />
        <Routes>
          <Route path="/weather-app/" element={<Home />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;

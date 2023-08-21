import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import "./styles/style.css";
import theme from "./styles/theme";
import Header from "./sections/Header";
import MainContent from "./pages/Home";
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
          <Route path="/weather-app/" element={<MainContent />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
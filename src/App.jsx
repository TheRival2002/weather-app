import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import "./styles/style.css";
import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./sections/Header";
import MainContent from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cities from "./pages/Cities";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

function App() {
  const routeLocation = useLocation();
  const colorMode = useSelector((state) => state.colorMode.mode);
  return (
    <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{ marginBlock: "2rem", borderRadius: "1rem" }}
        component={motion.div}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1 },
        }}
      >
        <Header />
        <AnimatePresence>
          <Routes location={routeLocation} key={location.key}>
            <Route path="/weather-app/" element={<MainContent />} />
            <Route path="/weather-app/cities" element={<Cities />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
}

export default App;

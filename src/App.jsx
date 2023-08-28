import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import "./styles/style.css";
import { darkTheme, lightTheme } from "./styles/theme";
import Header from "./sections/Header";
import MainContent from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cities from "./pages/Cities";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const containerVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1 },
  },
};

function App() {
  const routeLocation = useLocation();
  const colorMode = useSelector((state) => state.colorMode.mode);
  const cityChanged = useSelector((state) => state.changedLocation.location);

  return (
    <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container
        key={cityChanged}
        maxWidth="xl"
        sx={{ marginBlock: "2rem", borderRadius: "1rem" }}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <AnimatePresence>
          <Routes location={routeLocation} key={routeLocation.key}>
            <Route path="/weather-app/" element={<MainContent />} />
            <Route path="/weather-app/cities" element={<Cities />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
}

export default App;

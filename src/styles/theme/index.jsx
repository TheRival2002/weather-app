import { createTheme } from "@mui/material";

export const Colors = {
  background: "#2f2f2f",
  primary: "#1e1e1e",
  primary_hover: "#2d3436",
  secondary: "#bbd7ec",
  text_primary: "#fbfbfb",
  //////////////////
  // Neutral Colors
  //////////////////
  light_black: "#111015",
  white: "#ffffff",
  white_dimmed: "#a7a7a7",
};

const theme = createTheme({
  palette: {
    background: {
      default: Colors.background,
    },
    primary: {
      main: Colors.primary,
      light: Colors.primary_hover,
    },
    secondary: {
      main: Colors.secondary,
    },
    text: {
      primary: Colors.text_primary,
    },
    light_black: {
      main: Colors.light_black,
    },
    white: {
      main: Colors.white,
    },
    white_dimmed: {
      main: Colors.white_dimmed,
    },
  },
});

export default theme;

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
  black: "#000000",
  white_dimmed: "#a7a7a7",
};

export const lightTheme = createTheme({
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
    black: {
      main: Colors.black,
    },
    light_black: {
      main: "#161616",
    },
    white: {
      main: Colors.white,
    },
    white_dimmed: {
      main: Colors.white_dimmed,
    },
  },
});

export const darkTheme = createTheme({
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
    black: {
      main: Colors.black,
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

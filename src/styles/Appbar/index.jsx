import { Box, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material";

export const AppbarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.light_black.main,
  padding: "1em 2em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const AppbarContentContainer = styled(Box)(() => ({
  flex: "1 1 auto",
  display: "flex",
  justifyContent: "center",
}));

export const GridMain = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.light_black.main,
  padding: "1em 2em",
}));

export const StackSpaced = styled(Stack)(() => ({
  justifyContent: "space-between",
}));

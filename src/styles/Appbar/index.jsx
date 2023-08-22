import { Box, Card, CardContent, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material";

export const AppbarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.light_black.main,
  padding: "1.25rem 2rem",
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
  padding: ".5rem 2rem",
}));

export const StackSpaced = styled(Stack)(() => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  gap: ".5rem",
}));

export const StackColumn = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  gap: ".5rem",
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "1rem",
}));

export const StyledCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "210px",
}));

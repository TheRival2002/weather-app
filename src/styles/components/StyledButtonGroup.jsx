import { ToggleButtonGroup, styled } from "@mui/material";

export const StyledButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "1.5em",
  minWidth: "max-content",
}));

import { ToggleButtonGroup, styled, ToggleButton } from "@mui/material";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: "100vw",
    minWidth: "max-content",
  })
);

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "inherit !important",
  color: theme.palette.white_dimmed.main,
  textTransform: "initial",
  fontSize: ".8125em",
  "&.MuiButtonBase-root.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.light_black.main,
  },
  "&.MuiButtonBase-root.Mui-selected:hover": {
    color: theme.palette.light_black.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

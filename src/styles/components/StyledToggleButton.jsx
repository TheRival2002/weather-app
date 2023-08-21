import { ToggleButton, styled } from "@mui/material";
import { Colors } from "../theme";

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "inherit !important",
  color: Colors.white_dimmed,
  "&.MuiButtonBase-root.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
  },
  "&.MuiButtonBase-root.Mui-selected:hover": {
    color: theme.palette.light_black.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

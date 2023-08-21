import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
  padding: ".5em",
  transitionDuration: "250ms",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

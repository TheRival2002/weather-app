import { TextField, styled } from "@mui/material";

export const StyledTextfield = styled(TextField)(({ theme }) => ({
  minWidth: "10rem",
  flexGrow: "1",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100vw",
  "& .MuiAutocomplete-listbox": {
    backgroundColor: "red",
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.white_dimmed.main,
  },
  "& .MuiAutocomplete-clearIndicator": {
    color: theme.palette.white_dimmed.main,
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiInputAdornment-root": {
      marginRight: theme.spacing(1),
    },
    "&:hover fieldset": {
      borderColor: theme.palette.white.main,
      borderRadius: "100vw",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.white.main,
      borderRadius: "100vw",
    },
    "&.Mui-focused label": {
      color: theme.palette.white_dimmed.main,
    },
  },
}));

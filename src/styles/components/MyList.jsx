import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/material";

export const MyList = styled(List)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
}));

export const MyListItem = styled(ListItem)(() => ({
  width: "max-content",
  justifyContent: "start",
  gap: ".3125rem",
}));

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.white_dimmed.main,
  "&.Mui-selected": {
    color: theme.palette.white.main,
  },
}));

export const StyledListItemText = styled(ListItemText)(() => ({
  width: "max-content",
  "& .MuiTypography-root": {
    fontSize: "1.25rem",
  },
}));

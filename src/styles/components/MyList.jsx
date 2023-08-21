import { List, ListItem, ListItemButton } from "@mui/material";
import { styled } from "@mui/material";

export const MyList = styled(List)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
}));

export const MyListItem = styled(ListItem)(() => ({
  justifyContent: "start",
  gap: ".3125rem",
}));

export const ListItemButtonText = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.white_dimmed.main,
  fontSize: "2rem",
}));

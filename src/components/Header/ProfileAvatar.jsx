import { Avatar, ListItemButton } from "@mui/material";

export const ProfileAvatar = () => {
  return (
    <ListItemButton sx={{ padding: "0" }} disableRipple>
      <Avatar alt="profile picture" src="./src/assets/avatar.svg" />
    </ListItemButton>
  );
};

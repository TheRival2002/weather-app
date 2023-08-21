import { Avatar, ListItemButton } from "@mui/material";
import AvatarImg from "../../assets/avatar.svg";

export const ProfileAvatar = () => {
  return (
    <ListItemButton sx={{ padding: "0" }} disableRipple>
      <Avatar alt="profile picture" src={AvatarImg} />
    </ListItemButton>
  );
};

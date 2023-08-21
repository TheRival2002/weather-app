import { AppbarContentContainer } from "../../styles/Appbar";
import { MyList, MyListItem } from "../../styles/components/MyList";
import { ColorMode } from "../../components/Header/ColorMode";
import { ProfileAvatar } from "../../components/Header/ProfileAvatar";

const HeaderInteraction = () => {
  return (
    <AppbarContentContainer sx={{ justifyContent: "end" }}>
      <MyList>
        <MyListItem disablePadding>
          <ColorMode />
        </MyListItem>
        <MyListItem disablePadding>
          <ProfileAvatar />
        </MyListItem>
      </MyList>
    </AppbarContentContainer>
  );
};

export default HeaderInteraction;

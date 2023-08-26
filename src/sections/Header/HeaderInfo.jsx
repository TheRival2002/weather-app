import { AppbarContentContainer } from "../../styles/Appbar";
import { StyledIconButton } from "../../styles/components/StyledIconButton";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { MyList, MyListItem } from "../../styles/components/MyList";
import { LocationInfo } from "../../components/Header/LocationInfo";
import { motion } from "framer-motion";

const svgVariants = {
  hover: {
    scale: 1.2,
  },
};

const HeaderInfo = () => {
  return (
    <AppbarContentContainer sx={{ justifyContent: "start" }}>
      <MyList>
        <MyListItem disablePadding>
          <StyledIconButton
            aria-label="dashboard"
            component={motion.button}
            variants={svgVariants}
            whileHover="hover"
          >
            <GridViewRoundedIcon sx={{ fontSize: "1.3125rem" }} />
          </StyledIconButton>
        </MyListItem>
        <MyListItem disablePadding>
          <StyledIconButton
            aria-label="notifications"
            component={motion.button}
            variants={svgVariants}
            whileHover="hover"
          >
            <NotificationsRoundedIcon sx={{ fontSize: "1.3125rem" }} />
          </StyledIconButton>
        </MyListItem>
        <MyListItem disablePadding>
          <LocationInfo />
        </MyListItem>
      </MyList>
    </AppbarContentContainer>
  );
};

export default HeaderInfo;

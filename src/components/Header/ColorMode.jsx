import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import {
  StyledToggleButtonGroup,
  StyledToggleButton,
} from "../../styles/components/StyledToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { colorModeActions } from "../../redux/color-mode-slice";
import { motion } from "framer-motion";

const toggleBtnVariants = {
  hover: {
    scale: 1.1,
  },
};

export const ColorMode = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector((state) => state.colorMode.mode);

  const setLightMode = () => {
    dispatch(colorModeActions.setLightMode());
  };

  const setDarkMode = () => {
    dispatch(colorModeActions.setDarkMode());
  };

  return (
    <StyledToggleButtonGroup
      value={colorMode}
      exclusive
      aria-label="light or dark mode"
      color="light_black"
    >
      <StyledToggleButton
        onClick={setLightMode}
        value="light"
        aria-label="light mode"
      >
        <Brightness5OutlinedIcon
          sx={{ fontSize: "1.5rem" }}
          component={motion.svg}
          variants={toggleBtnVariants}
          whileHover={colorMode === "dark" && "hover"}
        />
      </StyledToggleButton>
      <StyledToggleButton
        onClick={setDarkMode}
        value="dark"
        aria-label="dark mode"
      >
        <NightsStayRoundedIcon
          sx={{ fontSize: "1.5rem" }}
          component={motion.svg}
          variants={toggleBtnVariants}
          whileHover={colorMode === "light" && "hover"}
        />
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

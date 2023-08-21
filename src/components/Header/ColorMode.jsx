import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import { StyledButtonGroup } from "../../styles/components/StyledButtonGroup";
import { StyledToggleButton } from "../../styles/components/StyledToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { colorModeActions } from "../../redux/color-mode-slice";

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
    <StyledButtonGroup
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
        <Brightness5OutlinedIcon sx={{ fontSize: "1.5rem" }} />
      </StyledToggleButton>
      <StyledToggleButton
        onClick={setDarkMode}
        value="dark"
        aria-label="dark mode"
      >
        <NightsStayRoundedIcon sx={{ fontSize: "1.5rem" }} />
      </StyledToggleButton>
    </StyledButtonGroup>
  );
};

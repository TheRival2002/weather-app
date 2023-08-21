import { Typography } from "@mui/material";
import {
  StyledToggleButtonGroup,
  StyledToggleButton,
} from "../../../../styles/components/StyledToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { timelineDataActions } from "../../../../redux/timeline-data-slice";

export const DataOption = () => {
  const dispatch = useDispatch();
  const timelineData = useSelector((state) => state.timelineData.timelineData);

  const handleChange = (e, newValue) => {
    newValue !== null &&
      dispatch(timelineDataActions.changeTimelineData(newValue));
  };

  return (
    <StyledToggleButtonGroup
      value={timelineData}
      exclusive
      aria-label="choose forecast data or air quality data"
      onChange={handleChange}
    >
      <StyledToggleButton
        value="forecast"
        aria-label="button for forecast data"
        sx={{ padding: "0.85em 2.5em" }}
      >
        <Typography variant="subtitle2" component="h3">
          Forecast
        </Typography>
      </StyledToggleButton>
      <StyledToggleButton
        value="air quality"
        aria-label="button for air quality data"
        sx={{ padding: "0.6125em 2.5em" }}
      >
        <Typography variant="subtitle2" component="h3">
          Air Quality
        </Typography>
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

import { Stack } from "@mui/material";
import TimelineOptions from "./TimelineOptions";
import TimelineWeekData from "./TimelineWeekData";

const TimelineWeather = () => {
  return (
    <Stack direction="column" spacing={2}>
      <TimelineOptions />
      <TimelineWeekData />
    </Stack>
  );
};

export default TimelineWeather;

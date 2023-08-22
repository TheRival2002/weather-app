import { Stack } from "@mui/material";
import TimelineOptions from "./TimelineOptions";
import TimelineWeekData from "./TimelineWeekData";
import { useSelector } from "react-redux";
import TimelineTomorrowData from "./TimelineTomorrowData";

const TimelineWeather = () => {
  const wantedTimeline = useSelector(
    (state) => state.quantityIndex.quantityIndex
  );
  return (
    <Stack direction="column" spacing={4}>
      <TimelineOptions />
      {wantedTimeline === 2 ? <TimelineWeekData /> : <TimelineTomorrowData />}
    </Stack>
  );
};

export default TimelineWeather;

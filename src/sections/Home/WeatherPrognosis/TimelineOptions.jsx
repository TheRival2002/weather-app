import { DataOption } from "../../../components/Home/WeatherPrognosis/TimelineOptions/DataOption";
import { SpanOfDays } from "../../../components/Home/WeatherPrognosis/TimelineOptions/SpanOfDays";
import { StackSpaced } from "../../../styles/Appbar";

const TimelineOptions = () => {
  return (
    <StackSpaced direction="row">
      <SpanOfDays />
      <DataOption />
    </StackSpaced>
  );
};

export default TimelineOptions;

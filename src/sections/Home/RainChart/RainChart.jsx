import { Stack, Typography } from "@mui/material";
import { ColumnChart } from "../../../components/Home/RainChart/ColumnChart";

const RainChart = () => {
  return (
    <Stack
      direction="column"
      spacing={4}
      marginLeft={6}
      justifyContent="center"
    >
      <Typography variant="h6" component="h3" paddingY={1}>
        Chance of rain
      </Typography>
      <ColumnChart />
    </Stack>
  );
};

export default RainChart;

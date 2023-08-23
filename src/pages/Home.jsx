import { Grid } from "@mui/material";
import WeatherPrognosis from "../sections/Home/WeatherPrognosis/WeatherPrognosis";
import { GridMain } from "../styles/Appbar";
import RainChart from "../sections/Home/RainChart/RainChart";
import GlobalMap from "../sections/Home/GlobalMap/GlobalMap";

const MainContent = () => {
  return (
    <GridMain
      component="main"
      rowSpacing={4}
      container
      borderRadius="0 0 2rem 2rem"
    >
      <Grid item xs={8}>
        <WeatherPrognosis />
      </Grid>
      <Grid item xs={4}>
        <RainChart />
      </Grid>
      <Grid item xs={8}>
        <GlobalMap />
      </Grid>
    </GridMain>
  );
};

export default MainContent;

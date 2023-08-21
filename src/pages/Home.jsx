import { Grid } from "@mui/material";
import WeatherPrognosis from "../sections/Home/WeatherPrognosis";
import { GridMain } from "../styles/Appbar";

const MainContent = () => {
  return (
    <GridMain component="main" container>
      <Grid item xs={8}>
        <WeatherPrognosis />
      </Grid>
    </GridMain>
  );
};

export default MainContent;

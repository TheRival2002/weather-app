import { Grid } from "@mui/material";
import WeatherPrognosis from "../sections/Home/WeatherPrognosis/WeatherPrognosis";
import { GridMain } from "../styles/Appbar";
import RainChart from "../sections/Home/RainChart/RainChart";
import GlobalMap from "../sections/Home/GlobalMap/GlobalMap";
import OtherCities from "../sections/Home/OtherCities/OtherCities";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    filter: "blur(10px)",
  },
};

const MainContent = () => {
  return (
    <GridMain
      component={motion.main}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
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
      <Grid item xs={4}>
        <OtherCities />
      </Grid>
    </GridMain>
  );
};

export default MainContent;

import { Stack, Typography } from "@mui/material";
import CitiesList from "./CitiesList";
import { useSelector } from "react-redux";

const OtherCities = () => {
  const mapHeight = useSelector((state) => state.mapHeight.mapHeight);
  return (
    <Stack
      direction="column"
      spacing={2}
      marginLeft={6}
      justifyContent="center"
      height={mapHeight - 35}
      overflow="hidden"
    >
      <Typography variant="h6" component="h3" paddingY={1}>
        Other large cities
      </Typography>
      <CitiesList />
    </Stack>
  );
};

export default OtherCities;

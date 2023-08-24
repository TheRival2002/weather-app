import { Stack, Typography } from "@mui/material";
import CitiesList from "./CitiesList";
import { useSelector } from "react-redux";
import { StackSpaced } from "../../../styles/Appbar";
import { StyledListItemText } from "../../../styles/components/MyList";
import { LinkBtn } from "../../../styles/components/LinkBtn";

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
      <StackSpaced>
        <Typography variant="h6" component="h3" paddingY={1}>
          Other large cities
        </Typography>
        <LinkBtn to="/weather-app/cities">
          <StyledListItemText primary="Show all >" />
        </LinkBtn>
      </StackSpaced>
      <CitiesList />
    </Stack>
  );
};

export default OtherCities;

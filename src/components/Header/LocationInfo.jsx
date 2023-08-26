import { ListItemIcon, Typography } from "@mui/material";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { darkTheme, lightTheme } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { weatherData } from "../../redux/fetch-weather-slice";
import { changeLocationActions } from "../../redux/change-location-slice";
import { useEffect } from "react";

export const LocationInfo = () => {
  const dispatch = useDispatch();

  const colorMode = useSelector((state) => state.colorMode.mode);
  const forecast = useSelector(weatherData);
  const city = useSelector((state) => state.changedLocation.city);
  const country = useSelector((state) => state.changedLocation.country);

  useEffect(() => {
    if (typeof forecast !== "string" && !Array.isArray(forecast)) {
      dispatch(changeLocationActions.changeCity(forecast.location.name));
      dispatch(changeLocationActions.changeCountry(forecast.location.country));
    }
  }, [forecast]);

  return (
    <>
      <ListItemIcon sx={{ minWidth: "30px" }} aria-label="location">
        <FmdGoodRoundedIcon
          sx={{
            fontSize: "1.5rem",
            color:
              colorMode === "dark"
                ? darkTheme.palette.white.main
                : lightTheme.palette.white.main,
          }}
        />
      </ListItemIcon>
      <Typography variant="body1" component="h1">
        {`${city}, `}
      </Typography>
      <Typography
        variant="body1"
        component="h2"
        sx={{
          color: lightTheme.palette.white_dimmed.main,
          ml: ".25rem",
          width: "max-content",
        }}
      >
        {country}
      </Typography>
    </>
  );
};

import SearchIcon from "@mui/icons-material/Search";
import { StyledTextfield } from "../../styles/Header/StyledTextfield";
import { InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeLocationActions } from "../../redux/change-location-slice";
import { useEffect } from "react";
import {
  fetchWeatherActions,
  weatherData,
  weatherError,
  weatherLoading,
} from "../../redux/fetch-weather-slice";
import { fetchForecast } from "../../utils/FetchForecast";

export const AutocompleteSearch = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.changedLocation.location);
  const enterValue = useSelector((state) => state.changedLocation.enterValue);

  const controlEnterValue = (e) => {
    dispatch(changeLocationActions.changeEnterValue(e.target.value));
  };

  const controlEnterPress = (e) => {
    if (e.key === "Enter") {
      dispatch(changeLocationActions.changeLocation(e.target.value));
    }
  };

  // const forecast = useSelector(weatherData);
  // const error = useSelector(weatherError);
  const loading = useSelector(weatherLoading);

  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchForecast(location));
    }
  }, [loading, dispatch]);

  useEffect(() => {
    if (location !== null) {
      dispatch(fetchWeatherActions.resetLoadingStatus());
    }
  }, [location]);

  // let content;
  // if (loading === "loading") {
  //   content = "Loading...";
  // } else if (loading === "succeeded") {
  //   content = forecast;
  // } else if (loading === "failed") {
  //   content = error;
  // }

  return (
    <>
      <StyledTextfield
        label="Search city..."
        variant="outlined"
        value={enterValue}
        onChange={(e) => controlEnterValue(e)}
        onKeyDown={controlEnterPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white.main" }} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

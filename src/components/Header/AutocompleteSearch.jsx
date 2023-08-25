import SearchIcon from "@mui/icons-material/Search";
import { StyledTextfield } from "../../styles/Header/StyledTextfield";
import { Autocomplete, InputAdornment, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeLocationActions } from "../../redux/change-location-slice";
import { useEffect, useMemo } from "react";
import {
  fetchWeatherActions,
  weatherLoading,
} from "../../redux/fetch-weather-slice";
import { fetchForecast } from "../../utils/FetchForecast";
import { fetchSearch } from "../../utils/FetchSearch";
import { searchData } from "../../redux/fetch-search-slice";
import debounce from "lodash.debounce";

export const AutocompleteSearch = () => {
  const dispatch = useDispatch();

  const optionsData = useSelector(searchData);
  const autocompleteOptions = useSelector(
    (state) => state.changedLocation.searchOptions
  );
  useEffect(() => {
    if (
      optionsData !== "string" &&
      Array.isArray(optionsData) &&
      optionsData.length !== 0
    ) {
      dispatch(
        changeLocationActions.changeSearchOptions(
          optionsData.map((el) => el.name)
        )
      );
    }
  }, [optionsData]);

  const autocompleteOption = useSelector(
    (state) => state.changedLocation.autocompleteOption
  );
  const location = useSelector((state) => state.changedLocation.location);
  const enterValue = useSelector((state) => state.changedLocation.enterValue);

  const changeOption = (e, newValue) => {
    dispatch(changeLocationActions.changeAutocompleteOption(newValue));
    dispatch(changeLocationActions.changeLocation(newValue));
  };

  const controlEnterValue = (e, newValue) => {
    dispatch(changeLocationActions.changeEnterValue(newValue));
    debouncedFetchSearch();
  };

  const sendInfoToFetchSearch = () => {
    dispatch(fetchSearch(enterValue));
  };

  const debouncedFetchSearch = useMemo(
    () => debounce(sendInfoToFetchSearch, 250),
    [enterValue]
  );

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

  const options = ["Split", "Zagreb", "London"];

  return (
    <>
      <Autocomplete
        fullWidth
        id="autocomplete"
        freeSolo
        options={
          autocompleteOptions.length !== 0 ? autocompleteOptions : options
        }
        value={autocompleteOption}
        onChange={changeOption}
        inputValue={enterValue}
        onInputChange={controlEnterValue}
        renderInput={(params) => (
          <StyledTextfield
            {...params}
            label="Search city..."
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white.main" }} />
                </InputAdornment>
              ),
            }}
          />
        )}
        PaperComponent={(props) => (
          <Paper
            sx={{
              backgroundColor: "primary.main",
              color: "text.main",
            }}
            {...props}
          />
        )}
      />
    </>
  );
};

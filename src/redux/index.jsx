import { configureStore } from "@reduxjs/toolkit";
import colorModeSlice from "./color-mode-slice";
import changeLocationSlice from "./change-location-slice";
import fetchWeatherSlice from "./fetch-weather-slice";

const store = configureStore({
  reducer: {
    colorMode: colorModeSlice.reducer,
    changedLocation: changeLocationSlice.reducer,
    weather: fetchWeatherSlice.reducer,
  },
});

export default store;

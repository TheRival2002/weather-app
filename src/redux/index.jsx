import { configureStore } from "@reduxjs/toolkit";
import colorModeSlice from "./color-mode-slice";
import changeLocationSlice from "./change-location-slice";
import fetchWeatherSlice from "./fetch-weather-slice";
import daysQuantityDataSlice from "./days-quantity-data-slice";
import timelineDataSlice from "./timeline-data-slice";
import weekDaySlice from "./week-day-slice";

const store = configureStore({
  reducer: {
    colorMode: colorModeSlice.reducer,
    changedLocation: changeLocationSlice.reducer,
    weather: fetchWeatherSlice.reducer,
    quantityIndex: daysQuantityDataSlice.reducer,
    timelineData: timelineDataSlice.reducer,
    selectedWeekDay: weekDaySlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import colorModeSlice from "./color-mode-slice";
import changeLocationSlice from "./change-location-slice";
import fetchWeatherSlice from "./fetch-weather-slice";
import daysQuantityDataSlice from "./days-quantity-data-slice";
import timelineDataSlice from "./timeline-data-slice";
import weekDaySlice from "./week-day-slice";
import forecastWeekSlice from "./forecast-week-slice";
import forecastTomorrowSlice from "./forecast-tomorrow-slice";
import mapHeightSlice from "./map-height-slice";
import fetchBulkSlice from "./fetch-bulk-slice";
import bulkDataSlice from "./bulk-data-slice";
import selectCitySlice from "./select-city-slice";

const store = configureStore({
  reducer: {
    colorMode: colorModeSlice.reducer,
    changedLocation: changeLocationSlice.reducer,
    weather: fetchWeatherSlice.reducer,
    quantityIndex: daysQuantityDataSlice.reducer,
    timelineData: timelineDataSlice.reducer,
    selectedWeekDay: weekDaySlice.reducer,
    forecastWeek: forecastWeekSlice.reducer,
    forecastTomorrow: forecastTomorrowSlice.reducer,
    mapHeight: mapHeightSlice.reducer,
    bulk: fetchBulkSlice.reducer,
    bulkData: bulkDataSlice.reducer,
    selectedCity: selectCitySlice.reducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const forecastTomorrowSlice = createSlice({
  name: "forecastTomorrow",
  initialState: {
    forecast: [
      {
        morning: {
          morning_temp: 16,
          morning_wind: 4,
          morning_pressure: 1000,
          morning_condition: "Sunny",
        },
      },
      {
        afternoon: {
          afternoon_temp: 16,
          afternoon_wind: 4,
          afternoon_pressure: 1000,
          afternoon_condition: "Sunny",
        },
      },
    ],
  },
  reducers: {
    changeForecast(state, action) {
      state.forecast = action.payload;
    },
  },
});

export const forecastTomorrowActions = forecastTomorrowSlice.actions;
export default forecastTomorrowSlice;

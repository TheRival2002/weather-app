import { createSlice } from "@reduxjs/toolkit";

const forecastWeekSlice = createSlice({
  name: "forecastWeek",
  initialState: {
    weekData: [
      {
        dayName: "Monday",
        condition: "rain",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
      {
        dayName: "Tuesday",
        condition: "Sunny",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
      {
        dayName: "Wednesday",
        condition: "Sunny",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
      {
        dayName: "Thursday",
        condition: "rain",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
      {
        dayName: "Friday",
        condition: "Sunny",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
      {
        dayName: "Saturday",
        condition: "rain",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
      {
        dayName: "Sunday",
        condition: "rain",
        humidity: 68,
        pressure: 1014,
        realFeel: 17.6,
        sunrise: "06:14 AM",
        sunset: "08:09 PM",
        wind: 13.7,
      },
    ],
  },
  reducers: {
    changeWeekData(state, action) {
      state.weekData = action.payload;
    },
  },
});

export const forecastWeekActions = forecastWeekSlice.actions;
export default forecastWeekSlice;

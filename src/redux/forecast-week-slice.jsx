import { createSlice } from "@reduxjs/toolkit";

const forecastWeekSlice = createSlice({
  name: "forecastWeek",
  initialState: {
    weekDataForecast: [
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
    weekDataAir: [
      {
        dayName: "Monday",
        condition: "rain",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
      {
        dayName: "Tuesday",
        condition: "Sunny",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
      {
        dayName: "Wednesday",
        condition: "Sunny",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
      {
        dayName: "Thursday",
        condition: "rain",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
      {
        dayName: "Friday",
        condition: "Sunny",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
      {
        dayName: "Saturday",
        condition: "rain",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
      {
        dayName: "Sunday",
        condition: "rain",
        realFeel: 17.6,
        co: 385.208,
        no2: 13.764,
        o3: 64.6,
        so2: 3.448,
        pm10: 32.384,
        pm2_5: 28.352000000000007,
      },
    ],
  },
  reducers: {
    changeWeekDataForecast(state, action) {
      state.weekDataForecast = action.payload;
    },
    changeWeekDataAir(state, action) {
      state.weekDataAir = action.payload;
    },
  },
});

export const forecastWeekActions = forecastWeekSlice.actions;
export default forecastWeekSlice;

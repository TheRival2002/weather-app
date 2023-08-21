import { createSlice } from "@reduxjs/toolkit";
import { fetchForecast } from "../utils/FetchForecast";

const fetchWeatherSlice = createSlice({
  name: "weather",
  initialState: {
    loading: "idle",
    data: [],
    error: "",
  },
  reducers: {
    resetLoadingStatus(state, action) {
      state.loading = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchForecast.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const loadedWeatherInfo = action.payload;
        state.data = loadedWeatherInfo;
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const weatherData = (state) => state.weather.data;
export const weatherLoading = (state) => state.weather.loading;
export const weatherError = (state) => state.weather.error;

export const fetchWeatherActions = fetchWeatherSlice.actions;
export default fetchWeatherSlice;

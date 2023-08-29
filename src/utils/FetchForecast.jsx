import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchForecast = createAsyncThunk(
  "data/fetchForecast",
  async (location) => {
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=71702b362a9a4b7d86c84550232908&q=${location}&days=7&aqi=yes&alerts=yes
    `;
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      return error.message;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchForecast = createAsyncThunk(
  "data/fetchForecast",
  async (location) => {
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=bec38ddacd7d46baa07161946231508&q=${location}&days=7&aqi=no&alerts=yes
    `;
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      return error.message;
    }
  }
);

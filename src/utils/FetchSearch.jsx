import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
  "data/fetchSearch",
  async (location) => {
    const URL = `https://api.weatherapi.com/v1/search.json?key=bec38ddacd7d46baa07161946231508&q=${location}
    `;
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      return error.message;
    }
  }
);

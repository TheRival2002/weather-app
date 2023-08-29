import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
  "data/fetchSearch",
  async (location) => {
    const URL = `https://api.weatherapi.com/v1/search.json?key=71702b362a9a4b7d86c84550232908&q=${location}
    `;
    try {
      const resp = await axios.get(URL);
      return resp.data;
    } catch (error) {
      return error.message;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBulk = createAsyncThunk("data/fetchBulk", async () => {
  const bulkRequestData = {
    locations: [
      {
        q: "53,-0.12",
        custom_id: "my-id-1",
      },
      {
        q: "London",
        custom_id: "any-internal-id",
      },
      {
        q: "90201",
        custom_id: "us-zipcode-id-765",
      },
      {
        q: "Zagreb",
        custom_id: "any-internal-id-123",
      },
      {
        q: "Split",
        custom_id: "any-internal-234",
      },
      {
        q: "Moscow",
        custom_id: "any-internal-345",
      },
      {
        q: "New York",
        custom_id: "any-internal-id",
      },
      {
        q: "Paris",
        custom_id: "any-internal-id",
      },
    ],
  };
  try {
    const resp = await axios.post(
      `https://api.weatherapi.com/v1/current.json?key=71702b362a9a4b7d86c84550232908&q=bulk`,
      bulkRequestData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

import { createSlice } from "@reduxjs/toolkit";
import { fetchBulk } from "../utils/FetchBulk";

const fetchBulkSlice = createSlice({
  name: "bulkSlice",
  initialState: {
    loading: "idle",
    data: [],
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBulk.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchBulk.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBulk.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const bulkLoading = (state) => state.bulk.loading;
export const bulkData = (state) => state.bulk.data;
export const bulkError = (state) => state.bulk.error;

export const fetchBulkActions = fetchBulkSlice.actions;
export default fetchBulkSlice;

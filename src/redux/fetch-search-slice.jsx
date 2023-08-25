import { createSlice } from "@reduxjs/toolkit";
import { fetchSearch } from "../utils/FetchSearch";

const fetchSearchSlice = createSlice({
  name: "search",
  initialState: { loading: "idle", data: [], error: "" },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const searchData = (state) => state.search.data;
export const searchLoading = (state) => state.search.loading;
export const searchError = (state) => state.search.error;

export const fetchSearchActions = fetchSearchSlice.actions;
export default fetchSearchSlice;

import { createSlice } from "@reduxjs/toolkit";

const bulkDataSlice = createSlice({
  name: "bulkExtracted",
  initialState: {
    bulkData: [
      {
        location: "California",
        country: "United States",
        temp: 18,
        condition: "Sunny",
      },
    ],
  },
  reducers: {
    changeBulkData(state, action) {
      state.bulkData = action.payload;
    },
  },
});

export const bulkDataActions = bulkDataSlice.actions;
export default bulkDataSlice;

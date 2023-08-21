import { createSlice } from "@reduxjs/toolkit";

const daysQuantityDataSlice = createSlice({
  name: "daysQuantity",
  initialState: { quantityIndex: 2 },
  reducers: {
    changeIndex(state, action) {
      state.quantityIndex = action.payload;
    },
  },
});

export const daysQuantityActions = daysQuantityDataSlice.actions;
export default daysQuantityDataSlice;

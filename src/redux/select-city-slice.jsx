import { createSlice } from "@reduxjs/toolkit";

const selectCitySlice = createSlice({
  name: "selectedCity",
  initialState: { selected: null },
  reducers: {
    changeSelectedCity(state, action) {
      state.selected = action.payload;
    },
  },
});

export const selectCityActions = selectCitySlice.actions;
export default selectCitySlice;

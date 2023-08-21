import { createSlice } from "@reduxjs/toolkit";

const changeLocationSlice = createSlice({
  name: "location",
  initialState: {
    location: "Seattle",
    country: "USA",
    city: "Seattle",
    enterValue: "",
  },
  reducers: {
    changeLocation(state, action) {
      state.location = action.payload;
    },
    changeCountry(state, action) {
      state.country = action.payload;
    },
    changeCity(state, action) {
      state.city = action.payload;
    },
    changeEnterValue(state, action) {
      state.enterValue = action.payload;
    },
  },
});

export const changeLocationActions = changeLocationSlice.actions;
export default changeLocationSlice;

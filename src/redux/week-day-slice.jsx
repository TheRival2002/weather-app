import { createSlice } from "@reduxjs/toolkit";

const weekDaySlice = createSlice({
  name: "weekDay",
  initialState: { weekDay: 0 },
  reducers: {
    changeWeekDay(state, action) {
      state.weekDay = action.payload;
    },
  },
});

export const weekDayActions = weekDaySlice.actions;
export default weekDaySlice;

import { createSlice } from "@reduxjs/toolkit";

export const timelineDataSlice = createSlice({
  name: "timelineData",
  initialState: { timelineData: "forecast" },
  reducers: {
    changeTimelineData(state, action) {
      state.timelineData = action.payload;
    },
  },
});

export const timelineDataActions = timelineDataSlice.actions;
export default timelineDataSlice;

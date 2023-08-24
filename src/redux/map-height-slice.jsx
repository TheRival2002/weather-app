import { createSlice } from "@reduxjs/toolkit";

const mapHeightSlice = createSlice({
  name: "mapHeight",
  initialState: { mapHeight: 0 },
  reducers: {
    changeMapHeight(state, action) {
      state.mapHeight = action.payload;
    },
  },
});

export const mapHeightActions = mapHeightSlice.actions;
export default mapHeightSlice;

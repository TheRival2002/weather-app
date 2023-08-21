import { createSlice } from "@reduxjs/toolkit";

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState: { mode: "dark" },
  reducers: {
    setLightMode(state, action) {
      state.mode = "light";
    },
    setDarkMode(state, action) {
      state.mode = "dark";
    },
  },
});

export const colorModeActions = colorModeSlice.actions;
export default colorModeSlice;

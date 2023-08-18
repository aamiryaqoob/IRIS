import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = theme.actions;

export default theme.reducer;

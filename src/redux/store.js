import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./slices/theme";
export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
});

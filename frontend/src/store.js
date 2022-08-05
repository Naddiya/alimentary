import { configureStore } from "@reduxjs/toolkit";
import bmiReducer from "./redux/bmiSlice";

export const store = configureStore({
  reducer: {
    bmi: bmiReducer,
  },
});

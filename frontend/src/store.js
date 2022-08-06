import { configureStore } from "@reduxjs/toolkit";

import bmiReducer from "./redux/bmiSlice";
import needsReducer from "./redux/needsSlice";

const store = configureStore({
  reducer: {
    bmi: bmiReducer,
    needs: needsReducer,
  },
});

export default store;

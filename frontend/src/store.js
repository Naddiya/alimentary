import { configureStore } from "@reduxjs/toolkit";

import bmiReducer from "./redux/bmiSlice";
import needsReducer from "./redux/needsSlice";
import lossReducer from "./redux/lossSlice";

const store = configureStore({
  reducer: {
    bmi: bmiReducer,
    needs: needsReducer,
    loss: lossReducer,
  },
});

export default store;

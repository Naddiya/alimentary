import { createSlice } from "@reduxjs/toolkit";
import {
  calculateMaxActivityLoss,
  calculateMaxEntriesLoss,
  calculateMaxTotalLoss,
} from "../utils/lossUtils";

const initialState = {
  calories: "",
  maxEntriesLoss: 0,
  maxActivityLoss: 0,
  maxTotalLoss: "",
  ranges: {
    entriesRange: 0,
    activityRange: 0,
  },
};

export const lossSlice = createSlice({
  name: "loss",
  initialState,
  reducers: {
    updateCalories: (state, action) => {
      state.calories = action.payload;
    },
    updateLoss: (state, action) => {
      state.maxEntriesLoss = calculateMaxEntriesLoss(state.calories);
      state.maxActivityLoss = calculateMaxActivityLoss(state.calories);
      state.maxTotalLoss = calculateMaxTotalLoss(state.calories);
      state.ranges.entriesRange = state.maxTotalLoss * 0.5;
      state.ranges.activityRange = state.maxTotalLoss * 0.5;
    },
    updateEntriesRange: (state, action) => {
      state.ranges.entriesRange = action.payload;
    },
    updateActivityRange: (state, action) => {
      state.ranges.activityRange = action.payload;
    },
    clearLossForm: (state, action) => {
      return initialState;
    },
  },
});

export const {
  updateCalories,
  updateLoss,
  clearLossForm,
  updateEntriesRange,
  updateActivityRange,
} = lossSlice.actions;

export default lossSlice.reducer;

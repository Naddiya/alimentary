import { createSlice } from "@reduxjs/toolkit";
import { calculateEnergyNeeds } from "../utils/energyNeedsUtils";

const initialState = {
  needs: 0,
  values: {
    height: "",
    weight: "",
    age: "",
    activityLevel: "",
    sportLevel: "",
    sportTime: "",
    genderRatio: "",
  },
};

export const needsSlice = createSlice({
  name: "needs",
  initialState,
  reducers: {
    updateValues: (state, action) => {
      console.log(state.values);
      state.values = action.payload;
    },
    updateNeeds: (state, action) => {
      state.needs = calculateEnergyNeeds(state.values);
    },
    clearValues: (state, action) => {
      return initialState;
    },
  },
});

export const { updateNeeds, updateValues, clearValues } = needsSlice.actions;

export default needsSlice.reducer;

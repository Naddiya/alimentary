import { createSlice } from "@reduxjs/toolkit";
import { calculateBmi, evaluateBmiLevel } from "../utils/bodyMassIndexUtils";

const initialState = {
  bmi: "",
  height: "",
  weight: "",
  level: "",
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {
    updateHeight: (state, action) => {
      state.height = action.payload;
    },
    updateWeight: (state, action) => {
      state.weight = action.payload;
    },
    updateBmi: (state, action) => {
      const bmi = calculateBmi(state.weight, state.height);
      state.bmi = bmi;

      const level = evaluateBmiLevel(state.bmi);
      state.level = level;
    },
    clearBmiForm: (state, action) => {
      return initialState;
    },
  },
});

export const { clearBmiForm, updateBmi, updateHeight, updateWeight } =
  bmiSlice.actions;

export default bmiSlice.reducer;

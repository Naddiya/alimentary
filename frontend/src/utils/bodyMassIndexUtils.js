export const calculateBmi = (weight, height) => {
  let result;
  if (!!weight && !!height) {
    result = (Math.abs(weight) / Math.pow(Math.abs(height / 100), 2)).toFixed(
      2
    );
  } else {
    result = 0;
  }
  return Math.abs(result);
};

export const evaluateBmiLevel = (bmi) => {
  let result = "";
  if (bmi < 18.5) {
    result = "insufficient";
  } else if (bmi >= 18.5 && bmi <= 25) {
    result = "normal";
  } else if (bmi >= 25 && bmi < 30) {
    result = "over-weight";
  } else if (bmi >= 30 && bmi < 35) {
    result = "class1_obesity";
  } else if (bmi >= 35 && bmi < 40) {
    result = "class2_obesity";
  } else if (bmi >= 40) {
    result = "class3_obesity";
  }
  return result;
};

export function calculateBmi(weight, height) {
  let result;
  if (!!weight && !!height) {
    result = (Math.abs(weight) / Math.pow(Math.abs(height / 100), 2)).toFixed(2);
  } else {
    result = "Error, make sure you filled all fileds";
  }
  return result;
}
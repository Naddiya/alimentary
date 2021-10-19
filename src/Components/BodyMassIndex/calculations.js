export function calculateBmi(weight, height) {
  return (Math.abs(weight) / Math.pow(Math.abs(height), 2)).toFixed(2);
}
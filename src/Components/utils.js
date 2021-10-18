export function calculateMaxEntriesDeficit(calories) {
  return Math.abs(calories) * 0.15;
};

export function calculateMaxIncreaseActivity(calories) {
  return Math.abs(calories) * 0.20;
};

export function calculateBmi(weight, height) {
  return (Math.abs(weight) / Math.pow(Math.abs(height), 2)).toFixed(2);
}
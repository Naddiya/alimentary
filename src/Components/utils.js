export function calculateMaxEntriesDeficit(calories) {
  return Math.abs(calories) * 0.15;
};

export function calculateMaxIncreaseActivity (calories) {
  return Math.abs(calories) * 0.20;
};
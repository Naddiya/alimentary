export function calcMaxEntriesDeficit(calories) {
  return Math.abs(calories) * 0.15;
};

export function calcMaxIncreaseActivity(calories) {
  return Math.abs(calories) * 0.20;
};
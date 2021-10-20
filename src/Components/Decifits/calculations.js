export function calculateMaxEntriesDeficit(calories) {
  return Math.abs(calories) * 0.15;
};

export function calculateMaxActivityDeficit(calories) {
  return Math.abs(calories) * 0.20;
};

export function calculateMaxCombinedDeficit(calories) {
  return Math.abs(calories) * 0.25;
}

export function getDifference(name, value, previousActivityRange, previousEntriesRange) {
  let difference = 0;
  if (name === 'activityCalories') {
    difference = previousActivityRange - value;
  }
  if (name === 'entriesCalories') {
    difference = previousEntriesRange - value;
  }
  return parseInt(difference);
}
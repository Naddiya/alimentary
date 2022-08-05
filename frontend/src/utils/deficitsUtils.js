export function calculateMaxEntriesDeficit(calories) {
  return Math.round(Number(calories) * 0.15);
}

export function calculateMaxActivityDeficit(calories) {
  return Math.round(Number(calories) * 0.2);
}

export function calculateMaxTotalDeficit(calories) {
  return Math.round(Number(calories) * 0.25);
}

export function calculateDifference(
  name,
  value,
  previousActivityRange,
  previousEntriesRange
) {
  let difference = 0;
  if (name === "activityCalories") {
    difference = previousActivityRange - value;
  }
  if (name === "entriesCalories") {
    difference = previousEntriesRange - value;
  }
  return parseInt(difference);
}

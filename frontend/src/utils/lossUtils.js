export const calculateMaxEntriesLoss = (calories) => {
  return Math.round(calories * 0.15);
};

export const calculateMaxActivityLoss = (calories) => {
  return Math.round(calories * 0.2);
};

export const calculateMaxTotalLoss = (calories) => {
  return Math.round(calories * 0.25);
};

export const calculateDifference = (
  name,
  value,
  previousActivityRange,
  previousEntriesRange
) => {
  let difference = 0;
  if (name === "activityRange") {
    difference = previousActivityRange - value;
  }
  if (name === "entriesRange") {
    difference = previousEntriesRange - value;
  }
  return parseInt(difference);
};

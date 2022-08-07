import {
  calculateDifference,
  calculateMaxActivityLoss,
  calculateMaxEntriesLoss,
  calculateMaxTotalLoss,
} from "../utils/lossUtils";

describe("calculateMaxEntriesLoss", () => {
  test("calculateMaxEntriesLoss for 3000 calories should return 450 max Loss", () => {
    expect(calculateMaxEntriesLoss(3000)).toEqual(450);
  });
});

describe("calculateMaxActivityLoss", () => {
  test("calculateMaxActivityLoss for 3000 calories should return 600 max Loss", () => {
    expect(calculateMaxActivityLoss(3000)).toEqual(600);
  });
});

describe("calculateMaxTotalLoss", () => {
  test("calculateMaxTotalLoss for 3000 calories should return 750 max combined Loss", () => {
    expect(calculateMaxTotalLoss(3000)).toEqual(750);
  });
});

describe("calculateDifference", () => {
  test("calculateDifference for 400 activityCalories should return -25", () => {
    expect(calculateDifference("activityCalories", 400, 375, 300, 375)).toEqual(
      -25
    );
  });
  test("calculateDifference for 300 entriesCalories should return 75", () => {
    expect(calculateDifference("entriesCalories", 300, 375, 375, 375)).toEqual(
      75
    );
  });
});

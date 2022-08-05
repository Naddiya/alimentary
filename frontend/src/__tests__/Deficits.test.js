import {
  calculateDifference,
  calculateMaxActivityDeficit,
  calculateMaxEntriesDeficit,
  calculateMaxTotalDeficit,
} from "../utils/deficitsUtils";

describe("calculateMaxEntriesDeficit", () => {
  test("calculateMaxEntriesDeficit for 3000 calories should return 450 max deficit", () => {
    expect(calculateMaxEntriesDeficit(3000)).toEqual(450);
  });
});

describe("calculateMaxActivityDeficit", () => {
  test("calculateMaxActivityDeficit for 3000 calories should return 600 max deficit", () => {
    expect(calculateMaxActivityDeficit(3000)).toEqual(600);
  });
});

describe("calculateMaxTotalDeficit", () => {
  test("calculateMaxTotalDeficit for 3000 calories should return 750 max combined deficit", () => {
    expect(calculateMaxTotalDeficit(3000)).toEqual(750);
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

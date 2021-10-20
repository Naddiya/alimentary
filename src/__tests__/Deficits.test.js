import {
  calculateMaxEntriesDeficit,
  calculateMaxActivityDeficit,
  calculateMaxCombinedDeficit,
  getDifference
} from '../Components/Decifits/calculations';

describe("calculateMaxEntriesDeficit", () => {
  test('calculateMaxEntriesDeficit for 3000 calories should return 450 max deficit', () => {
    expect(calculateMaxEntriesDeficit(3000)).toEqual(450);
  });
});

describe("calculateMaxActivityDeficit", () => {
  test('calculateMaxActivityDeficit for 3000 calories should return 600 max deficit', () => {
    expect(calculateMaxActivityDeficit(3000)).toEqual(600);
  });
});

describe("calculateMaxCombinedDeficit", () => {
  test('calculateMaxCombinedDeficit for 3000 calories should return 750 max combined deficit', () => {
    expect(calculateMaxCombinedDeficit(3000)).toEqual(750);
  });
});

describe("getDifference", () => {
  test('getDifference for 400 activityCalories should return -25', () => {
    expect(getDifference('activityCalories', 400, 375, 300, 375)).toEqual(-25);
  });
  test('getDifference for 300 entriesCalories should return 75', () => {
    expect(getDifference('entriesCalories', 300, 375, 375, 375)).toEqual(75);
  });
});
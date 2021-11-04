export function calculateEnergyNeeds(targetValues) {
  targetValues.sportTime !== undefined ? Math.abs(targetValues.sportTime) : targetValues.sportTime = 0;
  
  const weight = Math.abs(targetValues.weight);
  const height = Math.abs(targetValues.height);
  const age = Math.abs(targetValues.age);
  const activity = Math.abs(targetValues.activityLevel);
  const genderLevel = parseInt(targetValues.genderLevel);
  const sportTime = Math.abs(targetValues.sportTime);
  const sportLevel = Math.abs(targetValues.sportLevel);

  const basicNeeds = 9.9 * weight + 6.25 * height - 4.92 * age + genderLevel;

  const totalNeeds = Math.floor(basicNeeds * (activity + (sportLevel * sportTime)));

  return totalNeeds;
}
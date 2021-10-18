export function calculateMaxEntriesDeficit(calories) {
  return Math.abs(calories) * 0.15;
};

export function calculateMaxIncreaseActivity(calories) {
  return Math.abs(calories) * 0.20;
};

export function calculateBmi(weight, height) {
  return (Math.abs(weight) / Math.pow(Math.abs(height), 2)).toFixed(2);
}

export function calculateEnergyRequirement(weight, height, age, sportTime, inputCheckboxes){
  let weightPart = 9.9*weight;
  let heightPart = 6.25*height;
  let agePart = 4.92*age;
  let genderPart = parseInt(inputCheckboxes.genderLevel);
  let basicNeeds = weightPart + heightPart - agePart + genderPart;
  let activityPart = Math.abs(inputCheckboxes.activityLevel);
  let sportPart = Math.abs(inputCheckboxes.sportLevel) * sportTime;
  let totalNeeds = basicNeeds * (activityPart + sportPart);
  return Math.floor(totalNeeds)
}
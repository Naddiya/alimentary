export const calculateEnergyNeeds = (values) => {
  if (values === undefined) return;
  const {
    height,
    weight,
    age,
    activityLevel,
    sportLevel,
    sportTime,
    genderRatio,
  } = values;

  Number(sportTime) === 0 && Number(sportTime) + 1;

  const basicNeeds =
    9.9 * Number(weight) +
    6.25 * Number(height) -
    4.92 * Number(age) +
    Number(genderRatio);

  const totalNeeds = Math.floor(
    basicNeeds *
      (Number(activityLevel) + Number(sportLevel) * Number(sportTime))
  );

  return totalNeeds;
};

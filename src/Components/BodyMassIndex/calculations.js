export function calculateBmi(weight, height) {
  const currentHeight = Math.abs(height / 100);
  return (Math.abs(weight) / Math.pow(currentHeight, 2)).toFixed(2);
}
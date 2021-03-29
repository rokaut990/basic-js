const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !(typeof sampleActivity === "string") ||
    !parseInt(sampleActivity) ||
    parseInt(sampleActivity) < 0 ||
    parseInt(sampleActivity) >= 15
  ) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  return parseInt(Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k));
};

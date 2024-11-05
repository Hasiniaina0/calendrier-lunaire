export const calculateMoonPhaseByDate = (date) => {
  // Reference date for New Moon (January 6, 2000)
  const referenceDate = new Date(2000, 0, 6);
  const lunarCycle = 29.53059; // Average lunar cycle length in days

  // Calculate the difference in days between the given date and the reference date
  const daysDifference = (date - referenceDate) / (1000 * 60 * 60 * 24);

  // Calculate the current position in the lunar cycle
  const phase = (daysDifference % lunarCycle) / lunarCycle;

  // Determine the moon phase
  if (phase < 0.03 || phase > 0.97) {
    return "new-moon";
  } else if (phase >= 0.03 && phase < 0.22) {
    return "waxing-crescent";
  } else if (phase >= 0.22 && phase < 0.28) {
    return "first-quarter";
  } else if (phase >= 0.28 && phase < 0.47) {
    return "waxing-gibbous";
  } else if (phase >= 0.47 && phase < 0.53) {
    return "full-moon";
  } else if (phase >= 0.53 && phase < 0.72) {
    return "waning-gibbous";
  } else if (phase >= 0.72 && phase < 0.78) {
    return "last-quarter";
  } else {
    return "waning-crescent";
  }
};

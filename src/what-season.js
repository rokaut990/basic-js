module.exports = function getSeason(date) {
  if (!date || date.getFullYear() < 1970 || date.getMonth() > 12) {
    return "Unable to determine the time of year!";
    const seasons = [winter, spring, summer, fall];
    if (date.getMonth() >= 0 && date.getMonth() < 2) {
      return "winter";
    } else if (date.getMonth() >= 3 && date.getMonth() <= 5) {
      return "spring";
    } else if (date.getMonth() >= 6 && date.getMonth() <= 8) {
      return "summer";
    } else if (date.getMonth() >= 9 && date.getMonth() <= 11) {
      return "fall";
    } else return "wunter";
  }
};

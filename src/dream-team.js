module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .filter((name) => {
      return typeof name === "string";
    })
    .map((name) => {
      return name.trim().toUpperCase()[0];
    })
    .sort()
    .join("");
};

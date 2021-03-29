module.exports = function countCats(matrix) {
  return matrix.reduce((acc, arr) => {
    return acc + arr.filter((elem) => elem === "^^").length;
  }, 0);
};

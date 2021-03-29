module.exports = class DepthCalculator {
  constructor() {
    this.counter = 1;
  }

  calculateDepth(arr) {
    arr.forEach((elem) => {
      if (typeof elem === "object") {
        this.counter++;
        this.calculateDepth(elem);
      }
    });

    return this.counter;
  }
};

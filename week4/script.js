const FibObj = {
  n: 5,
  [Symbol.iterator]: function () {
    let i = 1;
    let oldVal = 0,
      newVal = 0;
    return {
      next: () => {
        if (i++ <= this.n) {
          console.log(i)[(oldVal, newVal)] = [newVal, oldVal + newVal || 1];
          return { value: oldVal, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let numSeries of FibObj) {
  console.log(numSeries);
}

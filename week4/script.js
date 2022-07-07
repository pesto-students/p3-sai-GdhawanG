const fibObj = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        if (condition) {
          return {
            value: "something",
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

for (let num of fibObj) {
  console.log(n);
}

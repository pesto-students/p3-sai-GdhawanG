const FibObj = {
  n: 5,
  [Symbol.iterator]: function () {
    let arr = [0, 1];
    let i = 2;
    return {
      next: () => {
        if (i <= this.n) {
          console.log(arr);
          arr[i] = arr[i - 1] + arr[i - 2];
          i++;
          return { value: arr[i], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

FibObj.n = 5;
console.log([...FibObj]);

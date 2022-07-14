// generating random number

let getNumber = function () {
  return Math.round(Math.random() * 100);
};
let randomNum = getNumber();

let executorFunc = function (resolve, reject) {};

let resolve = function (val) {
  return val;
};

let reject = function (err) {
  return err;
};

let myPromise = function (executorFunc) {
  // then = function (val) {
  //   console.log(`resolved with ${val}`);
  //   return this;
  // };
  // catch = function (err) {
  //   console.log(`rejected with ${err}`);
  // };
  if (randomNum % 5 != 0) {
    resolve(randomNum);
  } else {
    reject(randomNum);
  }
};
myPromise(executorFunc);
// myPromise.then();
// myPromise(executorFunc).then().catch();

// class approach
// class gdPromise {
//   constructor(resolve, reject) {
//     this.resolve = console.log(resolve);
//     this.reject = console.log(reject);
//   }
// }

// const myPromise = new gdPromise(10, 20);

// function approach

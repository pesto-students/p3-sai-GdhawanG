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
  if (randomNum % 5 != 0) {
    console.log(`resolved with ${randomNum}`);
    resolve(randomNum);
  } else {
    console.log(`rejected with ${randomNum}`);
    reject(randomNum);
  }
};
myPromise(executorFunc);
// myPromise.then();
// myPromise(executorFunc).then().catch();

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

const myPromise = {
  promise(executorFunc) {
    if (randomNum % 5 != 0) {
      // console.log(`resolved with ${randomNum}`);
      resolve(randomNum);
    } else {
      // console.log(`rejected with ${randomNum}`);
      reject(randomNum);
    }
  },
  then(val) {
    console.log(`resolved with ${val}`);
  },
  catch(err) {
    console.log(`rejected with ${err}`);
  },
};

function myPromise(myExecutorFunc) {}
function myExecutorFunc(myResolve, myReject) {
  function myResolve(val) {
    return val;
  }
  function myReject(err) {
    return err;
  }
}

function getNumber() {
  return new myPromise((myResolve, myReject) => {
    setTimeout(() => {
      let randomNum = Math.round(Math.random() * 100);
      if (randomNum % 5 != 0) {
        myResolve(randomNum);
      } else {
        myReject(randomNum);
      }
    }, 0);
  });
}

getNumber()
  .myThen((value) => {
    console.log(`resolved with ${value}`);
  })
  .myCatch((error) => {
    console.error(`rejected with ${error}`);
  });

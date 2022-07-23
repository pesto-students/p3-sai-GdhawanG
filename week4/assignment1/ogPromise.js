function getNumber() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.round(Math.random() * 100);
      if (randomNum % 5 != 0) {
        resolve(randomNum);
      } else {
        reject(randomNum);
      }
    }, 0);
  });
}

getNumber()
  .then((value) => {
    console.log(`resolved with ${value}`);
  })
  .catch((error) => {
    console.error(`rejected with ${error}`);
  });

const doTask1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Task 1");
    }, Math.random() * 1000);
  });
};
const doTask2 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Task 2");
    }, Math.random() * 1000);
  });
};
const doTask3 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Task 3");
    }, Math.random() * 1000);
  });
};

const awaitFunc = async () => {
  try {
    const response1 = await doTask1();
    console.log(response1);
    const response2 = await doTask2();
    console.log(response2);
    const response3 = await doTask3();
    console.log(response3);
  } catch (error) {
    console.error(`async await error ${error}`);
  }
};

// awaitFunc();

function* myGenerator() {
  // console.log("in myGenerator function");
  yield doTask1();
  yield doTask2();
  yield doTask3();
}

console.log(myGenerator().next());
console.log(myGenerator().next());
console.log(myGenerator().next());
console.log(myGenerator().next());

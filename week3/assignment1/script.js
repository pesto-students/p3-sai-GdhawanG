<<<<<<< HEAD
<<<<<<< HEAD
let map = new Map();
const memoizeAdd = function (...args) {
  let key = [...args].join();
  if (map.has(key)) {
    checkTime(map.get(key));
  } else {
    let sum = [...args].reduce((pre, cur) => {
      return pre + cur;
    }, 0);
    map.set(key, sum);
  }
  checkTime(map.get(key));
=======
=======
let map = new Map();
// let sum = 0;
>>>>>>> 046ec99 (done)
const memoizeAdd = function (...args) {
  let key = [...args].join(); // [100]
  if (map.has(key)) {
    checkTime(map.get(key));
    console.log("if");
  } else {
    let sum = [...args].reduce((pre, cur) => {
      return pre + cur;
    }, 0);
    map.set(key, sum);
  }
<<<<<<< HEAD
>>>>>>> 091063b (moved files into assignment1 folder)
=======
  checkTime(map.get(key));
>>>>>>> 046ec99 (done)
};

const checkTime = function (fn) {
  console.time();
  console.log(fn);
  console.timeEnd();
};

memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
// (key = 100), 200, (value = 300);
memoizeAdd(100, 100);
<<<<<<< HEAD
=======
memoizeAdd(100, 100, 400);
>>>>>>> 091063b (moved files into assignment1 folder)

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
};

const checkTime = function (fn) {
  console.time();
  console.log(fn);
  console.timeEnd();
};

memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 100);

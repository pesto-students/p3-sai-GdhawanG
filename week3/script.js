const memoizeAdd = function (...args) {
  const key = [...args];
  const sum = key.reduce((pre, cur) => {
    return pre + cur;
  }, 0);

  const map = new Map();
  if (key == map.has(key)) {
    checkTime(map.get(key));
  } else {
    map.set(key, sum);
    checkTime(map.get(key));
  }
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
memoizeAdd(100, 100, 400);

let map = new Map();
map.set(1, "a");
map.set(2, "b");
map.set(3, "c");

let key = [1, 2];
map.set(key, "array");
console.log(map.has(key));

if (map.has(key)) {
  console.log("yes");
} else {
  console.log("no");
}

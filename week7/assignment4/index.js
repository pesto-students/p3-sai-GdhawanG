/*
Time Complexity - O(n)
Space Complexity - O(n)
*/
const isBalanced = (str) => {
  console.log(str);
  let arr = [];
  let sequence = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  let strLen = str.length;
  if (strLen < 1 || strLen > 3200) throw "out of bound";
  if (strLen % 2 != 0) {
    return "unbalanced";
  }
  for (let i = 0; i < strLen; i++) {
    if (sequence.has(str[i])) {
      arr.push(sequence.get(str[i]));
    } else if (str[i] !== arr.pop()) {
      return "unbalanced";
    }
  }
  return "balanced";
};

try {
  let x = `{([])}`;
  console.log(isBalanced(x));
  let y = `()`;
  console.log(isBalanced(y));
  let z = `([]`;
  console.log(isBalanced(z));
} catch (error) {
  console.log(error);
}

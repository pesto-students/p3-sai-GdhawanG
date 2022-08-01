/*
 * Time Complexity: O(N)
 * Space Complexity: O(2N) ~ O(N)
 */

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = arr.length;
let newArr = [];
let startColumn = 0;
let endColumn = n - 1;
let startRow = 0;
let endRow = n - 1;

while (startColumn <= endColumn && startRow <= endRow) {
  // top row
  for (let i = startColumn; i <= endColumn; i++) {
    newArr.push(arr[startRow][i]);
  }
  startRow++;
  // right column
  for (let i = startRow; i <= endRow; i++) {
    newArr.push(arr[i][endColumn]);
  }
  endColumn--;
  // bottom row
  for (let i = endColumn; i >= startColumn; i--) {
    newArr.push(arr[endRow][i]);
  }
  endRow--;

  // left column
  for (let i = endRow; i >= startRow; i--) {
    newArr.push(arr[i][startColumn]);
  }
  startColumn++;
}

console.log(newArr);

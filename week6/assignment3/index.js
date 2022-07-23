/*
 * Time Complexity: O(N^2)
 * Space Complexity: O(N)
 */

function sort(array) {
  let n = array.length;
  let temp;
  let i = 1;
  while (i < n - 1) {
    for (let index = 0; index < n; index++) {
      if (array[index] > array[index + 1]) {
        temp = array[index + 1];
        array[index + 1] = array[index];
        array[index] = temp;
      }
    }
    i++;
  }
  console.log(array);
}

sort([0, 2, 1, 2, 0]);
sort([0, 1, 0]);
sort([0, 1, 0, 2, 0, 1, 0, 2]);

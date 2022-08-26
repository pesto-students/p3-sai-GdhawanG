/*
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function maxSumSubArray(array) {
  let N = array.length;
  let curSum = 0;
  let maxSum = 0;
  for (i = 0; i < N; i++) {
    curSum += array[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
    if (curSum < 0) {
      curSum = 0;
    }
    // console.log(array[i], curSum, maxSum);
  }
  return maxSum;
}

// let A = [1, 2, 3, 4, -10];
let A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubArray(A));

/*
Test script to achieve desired time complexity
*/

let arr = [1, 3, 2, 4];
let arr2 = [6, 8, 0, 1, 3];

/*
Time Complexity = O(N) : using a while loop inside for loop
Space Complexity = O(N) : no aux space used
*/
const nextEle = function (array) {
  let N = array.length;
  for (i = 0; i < N; i++) {
    let j = i + 1;
    let max = Math.max(...array);
    if (array[i] == max || i == N - 1) {
      console.log(`the next larger element to ${array[i]} is -1`);
    }
    if (array[i] < array[j]) {
      console.log(`the next larger element to ${array[i]} is ${array[j]}`);
    } else {
      console.log(`the next larger element to ${array[i]} is -1`);
    }
  }
};

// nextEle(arr);
// nextEle(arr2);

/*
Fails in let arr3 = [5, 6, 4, 7, 1, 8, 2]; 
nextEle(arr3);
*/

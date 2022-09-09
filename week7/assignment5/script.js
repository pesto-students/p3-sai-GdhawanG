let arr = [1, 3, 2, 4];
let arr2 = [6, 8, 0, 1, 3];

/*
Time Complexity = O(N^2) : using a while loop inside for loop
Space Complexity = O(N) : no aux space used
*/
const nextEle = function (array) {
  let N = array.length;
  for (i = 0; i <= N; i++) {
    let j = i + 1;
    while (j <= N) {
      if (array[i] < array[j]) {
        console.log(`the next larger element to ${array[i]} is ${array[j]}`);
        break;
      } else if (j == N - 1) {
        console.log(`the next larger element to ${array[N - 1]} is -1`);
      } else {
        console.log(`the next larger element to ${array[i]} is -1`);
        break;
      }
      j++;
    }
  }
};

nextEle(arr);
// nextEle(arr2);

/*
@function Queue a function to generate a Queue using two stacks
*/
function Queue() {
  let s1 = [];
  let s2 = [];

  /*
@function Queue a function to add elements to Queue
Time Complexity - O(n)
*/
  this.enqueue = (value) => {
    if (value < 1 || value > 100) throw new Error("Invalid value");
    if (s1.length == 100) throw new Error("Q is full");
    s1.push(value);
  };
  /*
@function Queue a function to remove elements from Queue
Time Complexity - O(n)
*/
  this.dequeue = () => {
    while (s1.length) {
      s2.push(s1.pop());
    }
    if (s2.length == 0) throw new Error("Q is empty");
    if (s2.length >= 1) {
      for (let i = 0; i < s1.length; i++) {
        s2.push(s1.pop());
      }
      s2.pop();
    }
  };
  this.log = () => {
    console.log(...s1, ...s2);
  };
}

try {
  let Q = new Queue();
  Q.enqueue(1);
  Q.enqueue(2);
  Q.enqueue(1);
  Q.enqueue(3);
  Q.enqueue(2);
  Q.enqueue(1);
  Q.enqueue(4);
  Q.enqueue(2);
  Q.log();
  Q.dequeue();
  Q.dequeue();
  Q.log();
} catch (error) {
  console.log(error);
}

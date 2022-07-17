function createStack() {
  let items = [];
  return {
    push(x) {
      items.push(x);
    },
    pop() {
      items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); // => undefined

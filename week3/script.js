let obj = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
  getMethodDetails: function (sNo, methodName) {
    console.log(sNo + " " + methodName);
  },
};
obj.getFullName(); // John Doe
obj.getMethodDetails(18, "Male"); // 18 Male

let obj2 = {
  firstName: "Johny",
  lastName: "Bravo",
};

// 1. call() in action
obj.getFullName.call(obj2); // Johny Bravo
obj.getMethodDetails.call(obj2, 1, "call"); // 1 call

// 2. apply() in action
obj.getFullName.apply(obj2); // Johny Bravo
obj.getMethodDetails.apply(obj2, [2, "apply"]); // 2 apply

// 3. bind() in action
let bindNameFunc = obj.getFullName.bind(obj2);
bindNameFunc(); // Johny Bravo
let bindMethodFunc = obj.getMethodDetails.bind(obj2);
bindMethodFunc(3, "bind"); // 3 bind

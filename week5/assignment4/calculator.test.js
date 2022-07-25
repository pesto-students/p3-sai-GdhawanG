const calculator = require("./calculator");

test("addition test", () => {
  var result = calculator.sum(1, 2);
  expect(result).toBe(3);
});

test("subtraction test", () => {
  var result = calculator.diff(10, 2);
  expect(result).toBe(8);
});

test("multiplication test", () => {
  var result = calculator.product(5, 2);
  expect(result).toBe(10);
});

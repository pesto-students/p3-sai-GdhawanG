var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

class Teacher extends Person {
  teach(subject) {
    return `${this.name} is now teaching ${subject}`;
  }
}

var him = new Teacher();
him.initialize("adam", 45);
console.log(him.teach("inheritance"));

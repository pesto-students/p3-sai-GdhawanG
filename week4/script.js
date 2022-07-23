var Person = function (name, subject) {
  this.name = name;
  this.subject = subject;

  function teach(subject) {
    return `${this.name} is now teaching ${this.subject}`;
  }
};

var Teacher = new Person("gunjan", "js");

console.log(Teacher.__proto__);

// Teacher.console.log(Teacher.teach("js"));

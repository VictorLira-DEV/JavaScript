"strict mode";

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype); //linking prototypes

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 1996, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge(); //this works because prototype chain
console.log(mike);

console.log(mike instanceof Student)
console.log(mike instanceof Person)
console.log(mike instanceof Object)
Student.prototype.constructor = Student //o protótipo foi corrigido, estava Person agora está Student
console.dir(Student.prototype.constructor)

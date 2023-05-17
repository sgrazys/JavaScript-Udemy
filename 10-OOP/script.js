'use strict';
//////////////////
// //CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear

  // NEVER TO DO THIS
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // }
}

const son = new Person('Jokubas', 2018);
console.log(son);
// 1. New empty obj is created
// 2. function is called, and 'this' keyword point to new empty {}, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const son2 = new Person('Tauras', 2021);
const mother = new Person('Marija', 1987);

console.log(son2);
console.log(mother);

const father = {
  firstName: 'Saulius',
  birthYear: 1986
}

console.log(father);

console.log(son instanceof Person);
console.log(mother instanceof Person);
console.log(father instanceof Person);

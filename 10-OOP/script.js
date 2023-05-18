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

const jokubas = new Person('Jokubas', 2018);
console.log(jokubas);
// 1. New empty obj is created
// 2. function is called, and 'this' keyword point to new empty {}, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const tauras = new Person('Tauras', 2021);
const marija = new Person('Marija', 1987);

console.log(tauras, marija);


// //Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

marija.calcAge();
jokubas.calcAge();
tauras.calcAge();

console.log(marija.__proto__);

console.log(Person.prototype.isPrototypeOf(marija));
console.log(Person.prototype.isPrototypeOf(tauras));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(marija, tauras);
console.log(marija.species, tauras.species);

console.log(marija.hasOwnProperty('firstName'));
console.log(marija.hasOwnProperty('species'));
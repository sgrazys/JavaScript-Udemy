'use strict';
//////////////////
// //CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR

// const Person = function (fullname, birthYear) {
//   //   // Instance properties
//   this.fullname = fullname;
//   this.birthYear = birthYear;

//   //   // NEVER TO DO THIS
//   //   // this.calcAge = function () {
//   //   //   console.log(2023 - this.birthYear);
//   //   // }
// };

// const jokubas = new Person('Jokubas', 2018);
// console.log(jokubas);
// // // 1. New empty obj is created
// // // 2. function is called, and 'this' keyword point to new empty {}, this = {}
// // // 3. {} linked to prototype
// // // 4. function automatically return {}

// const tauras = new Person('Tauras', 2021);
// const marija = new Person('Marija', 1987);

// // console.log(tauras, marija);
// console.log(tauras instanceof Person);

// // //Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// marija.calcAge();
// jokubas.calcAge();
// tauras.calcAge();

// console.log(marija.__proto__);

// console.log(Person.prototype.isPrototypeOf(marija));
// console.log(Person.prototype.isPrototypeOf(tauras));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';

// console.log(marija, tauras);
// console.log(marija.species, tauras.species);

// console.log(marija.hasOwnProperty('fullname'));
// console.log(marija.hasOwnProperty('species'));

// // // Prototypal inheritance  on built-in objects
// console.log(marija.__proto__);
// // Object.prototype(top of prototype chain)
// console.log(marija.__proto__.__proto__);
// console.log(marija.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 5, 1, 4, 8, 3, 8, 3, 4, 5]; // new Array === []
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

//////////////////
// //ES CLASSES

// class expression
// const PersonCl = class {};

// // class declaration
// class PersonCl {
//   constructor(fullname, birthYear) {
//     this.fullname = fullname;
//     this.birthYear = birthYear;
//   }

//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(Hey, ${this.fullname});
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   // Set a property that already egsits
//   set fullname(name) {
//     if (name.includes(' ')) {
//       this._fullname = name;
//     } else alert(${name} is not full name!);
//   }

//   get fullname() {
//     return this._fullname;
//   }
// }

// const jenifer = new PersonCl('Jenifer Lopez', 1979);
// console.log(jenifer);
// jenifer.calcAge();
// console.log(jenifer.age);

// // PersonCl.prototype.greet = function () {
// //   console.log(Hey, ${this.fullname});
// // };

// jenifer.greet();

// const marlon = new PersonCl('Marlon Brando', 1921);

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode

//////////////////
// //SETTERS AND GETTERS

// const account = {
//   owner: 'Saulius',
//   movements: [200, 450, 50, 640, 120],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(newMov) {
//     this.movements.push(newMov);
//   },
// };

// console.log(account.latest);
// account.latest = 999;
// console.log(account.movements);

// STATIC METHODS

// const Person = function (fullname, birthYear) {
//   //   // Instance properties
//   this.fullname = fullname;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log(Hey there 👋);
// };

// const marija = new Person('Marija', 1987);
// Person.hey();
// // marija.hey();

// class PersonCl {
//   constructor(fullname, birthYear) {
//     this.fullname = fullname;
//     this.birthYear = birthYear;
//   }

//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   greet() {
//     console.log(Hey, ${this.fullname});
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   // Static Method - instance'ai nepasiekia. Pasiekia tik pati klase.
//   static hey() {
//     console.log(this);
//     console.log(Hey there 👋);
//   }
// }

// // const tauras = new PersonCl('Tauras', 2021);
// // // tauras.hey();

// // PersonCl.hey();

// //////////////////
// // //OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const russel = Object.create(PersonProto);
// console.log(russel);
// russel.name = 'Russel';
// russel.birthYear = 1964;
// russel.calcAge();

// const sandra = Object.create(PersonProto);
// sandra.init('Sandra', 1988);
// sandra.calcAge();

// //////////////////
// // //  INHERITANCE BETWEEN 'CLASSES': CONSTRUCTOR FUNCTIONS

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// };
// const leo = new Student('Leo', 1998, 'Computer Science');

// leo.introduce();
// leo.calcAge();

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// //////////////////
// // //  INHERITANCE BETWEEN 'CLASSES': E6 CLASSES

class PersonCl {
  constructor(fullname, birthYear) {
    this.fullname = fullname;
    this.birthYear = birthYear;
  }

  //Methods will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullname}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // Set a property that already egsits
  set fullname(name) {
    if (name.includes(' ')) {
      this._fullname = name;
    } else alert(`${name} is not full name!`);
  }

  get fullname() {
    return this._fullname;
  }

  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullname, birthYear, course) {
    // ALWAYS NEEDS TO HAPPEN FIRST!
    super(fullname, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullname} and I study  ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old, but as a student I feel more like ${
        2023 - this.birthYear - 30
      } 😆`
    );
  }
}

// const mario = new StudentCl('Mario Bros', 1973);
const mario = new StudentCl('Mario Bros', 1973, 'Game Development');
console.log(mario);
mario.introduce();
mario.calcAge();

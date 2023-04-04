'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are ${age} old, born in ${birthYear}`
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //Creating  NEW variables with same name as outer scope's variables
//       var millenial = true
//       // Reassigning  outer scope's variables
//       output = 'NEW OUTPUT';

//       const firstName = 'Bruce';
//       const str = `Oh, and your are a millenial, ${firstName}`;
//       console.log(str);

//       function addValues(a, b) {
//         return a + b
//       }

//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(addValues(10, 5));
//     console.log(output);

//   }
//   printAge();

//   return age;
// }

// const firstName = 'Maikas';
// calcAge(1995);



// // Hoisting with variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Mike';
// let job = 'student';
// const year = 1975;

// //Hoisting with functions
// console.log(addDeclaration(2, 3));
// // console.log(addExpression(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2,3));


// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// }

// var addArrow = (a, b) => a + b;


// //Example. why we have to avoid using var 
// console.log(numProducts);
// if (!numProducts) deleteShoppingCard();

// var numProducts = 10;

// function deleteShoppingCard() {
//   console.log('All products deleted');
// }


// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   // console.log(this);
// }

// calcAge(1975);

// const calcAgeArrow = (birthYear) => {
//   console.log(2023 - birthYear);
//   // console.log(this);
// }

// calcAgeArrow(2000);

// const mike = {
//   year: 1975,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2023 - this.year);
//   }
// }

// mike.calcAge();

// const sandra = {
//   year: 2000,
//   gender: 'female'
// }

// sandra.calcAge = mike.calcAge;

// sandra.calcAge();

// const f = mike.calcAge;

// f();

// var firstName = 'James';

// const mike = {
//   firstName: 'Mike',
//   year: 1995,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2023 - this.year);


//     //SOLUTION 1 | THIS IS OLD pre ES6 solution

//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // }
//     // isMillenial();


//     //  SOLUTION 2 
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     }
//     isMillenial();

//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hello ${this.firstName}`);
//   }
// };

// mike.greet();
// mike.calcAge();


// const addExpression = function (a, b) {
//   // console.log(arguments.length);
//   let result = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i]
//   }
//   console.log(result);
// }

// addExpression(1, 2, 7, 40, 160)


// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b
// }

// addArrow(2, 3, 5)

// let age = 30;
// let oldAge = age;
// age = 35;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Saulius',
//   age: 36
// };

// const friend = me;

// friend.age = 40;

// console.log('Friend:', friend);
// console.log('Me:', me);

// me.name = 'Tauras';
// friend.name = 'Jokubas';

// console.log('Friend:', friend);
// console.log('Me:', me);

// Primitive Types
let lastName = 'Brando';
let oldLastName = lastName;
lastName = 'Paccino';

console.log(lastName, oldLastName);

// Reference types
const sandra = {
  firstName: 'Sandra',
  lastName: 'Brando',
  age: 25
}

const marriedSandra = sandra;
marriedSandra.lastName = 'Paccino';

console.log(`Before marriage Sandra's lastname was ${sandra.lastName} `);
console.log(`After marriage Sandra's lastname is ${marriedSandra.lastName} `);

// Copying objects
const sandra2 = {
  firstName: 'Sandra',
  lastName: 'Brando',
  age: 25,
  family: ['Alice', 'Bruce', 'Alex']
};

//SHALLLOW COPY  - nenukopina vidiniu objektu
const sandraCopy = Object.assign({}, sandra2)
sandraCopy.lastName = 'Paccino';

sandraCopy.family.push('Tom');
sandraCopy.family.push('Andrea');

console.log('Before marriage,', sandra2);
console.log('After marriage,', sandraCopy);

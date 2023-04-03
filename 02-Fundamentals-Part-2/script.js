'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!'); */

// const private = 534;

////////////////////////////////////
//FUNCTIONS

/* function logger() {
  console.log('My name is Saulius');
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num); */

////////////////////////////////////
//FUNCTIONS DECLARATION, EXPRESSIONS, ARROW FUNCTION

/* //FUNCTION DECLARATIOM
function calcAge1(birthYear) {
  return 2037 - birthYear;

}

const age1 = calcAge1(2000);

//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(2000);
console.log(age1, age2); */


/* //ARROW FUNCTION
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(2000, 'Saulius'));
console.log(yearsUntilRetirement(1986, 'Algis')); */

//FUNCTION CALLING OTHER FUNCTIONS
/* function cutFruitPieces(fruit) {
  return fruit * 3
}


function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} piecies of orange.`;
  return juice;
}

console.log(fruitProcessor(5, 10)); */

// REVIEWING FUNCTIONS

// const calcAge = function (yearOfBirth) {
//   return 2037 - yearOfBirth;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {

//   const age = calcAge(birthYear)
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement}`);
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired! 🥳`);
//     return - 1
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Marlon'));
// console.log(yearsUntilRetirement(1950, 'All'));

////////////////////////////////////
// ARRAYS (data structure)

//INTRODUCTION 

// const actor1 = 'Marlon';
// const actor2 = 'All';
// const actor3 = 'Sandra';

// const colleagues = ['Marlon', 'All', 'Sandra'];
// console.log(colleagues);

// const numbers = new Array(1991, 1986, 2008, 2023);

// console.log(colleagues[0]);
// console.log(colleagues[2]);

// console.log(colleagues.length);
// console.log(colleagues[colleagues.length - 1]); //get last element from array

// colleagues[2] = 'Salma'; // replace element
// console.log(colleagues);

// // colleagues = ['Russel', 'Sylvester']   - // negalima colleagues priskirti naujo listo, nes colleagues yra const.

// const firstName = 'Marlon'
// const marlon = [firstName, 'Brando', 2023 - 1924, 'actor', colleagues];
// console.log(marlon);


// // Exercise:

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// }

// const years = [1997, 1976, 1981, 2002, 1995, 2004, 2018, 1986];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

////////////////////////////////////
// BASIC ARRAY METHODS


/* const colleagues = ['Marlon', 'All', 'Sandra'];

// PUSH method. Add item to the array at end.
colleagues.push('Salma'); // !! push method mutate original array. !!
console.log(colleagues);

const newLengthCollegues = colleagues.push('Russel'); // push returns length of array
console.log(newLengthCollegues);

// UNSHIFT method. Add item to the beginning of the array.
colleagues.unshift('Leonardo') // unshift returns length of array
console.log(colleagues);

//POP. Remove last item in the array
colleagues.pop();
console.log(colleagues.pop()); // POP returns removed element
console.log(colleagues);

// SHIFT . Removes first item in the array
colleagues.shift();
console.log(colleagues); // SHIFT also retuns method which was removed

//INDEX OF - shows position of element in array.
console.log(colleagues.indexOf('All'));
console.log(colleagues.indexOf('Angelina'));

colleagues.push('angelina')
colleagues.push(17)

// INCLUDES - shows if element is in array. Return boolean true / false
console.log(colleagues.includes('All')) // returns true
console.log(colleagues.includes('Angelina')) // returns false and it is STRICT equality
console.log(colleagues.includes(17)) // returns true and it is STRICT equality

// we can use INCLUDES to write conditionals
if (colleagues.includes('Sandra')) console.log('Bullock');

if (colleagues.includes('Morgan')) {
  console.log('Freeman');
} else (
  console.log('There is no Morgan Freeman')
) */

////////////////////////////////////
// OBJECTS (data structure) Introduction

// const person = {
//   firstName: 'Marlon',
//   lastName: 'Brando',
//   age: 2023 - 1924,
//   job: 'actor',
//   colleague: ['All', 'Salma', 'Angelina']
// }

// GET INFO FROM OBJ AND CHANGE PROPERTY VALUE

// const person = {
//   firstName: 'Marlon',
//   lastName: 'Brando',
//   age: 2023 - 1924,
//   job: 'actor',
//   colleagues: ['All', 'Salma', 'Angelina']
// }

// console.log(person);

// console.log('Last name:', person.lastName);
// console.log('First name:', person['firstName']);

// const nameKey = 'Name';
// console.log(person['first' + nameKey]);
// console.log(person['last' + nameKey]);

// // console.log(person.'last' + nameKey); // Not works

// const interestedIn = prompt('What do you want to know about Marlon? Choose between firstName, lastName, age, job and colleagues');

// if (person[interestedIn]) {
//   console.log(person[interestedIn]);
// } else {
//   console.log('Wrong request. Choose between firstName, lastName, age, job and colleagues');
// }

// // Change / add Object property, value

// person.location = 'USA';
// person['movie'] = 'Godfather';
// console.log(person);

// // Challenge. Dynamic sentence, no hard code of object values
// // Maroln has 3 collegues, and his best colleague  is All.

// console.log(`${person.firstName} has ${person.colleagues.length} colleagues, and his best collegue is ${person.colleagues[0]}.`);

////////////////////////////////////
// OBJECTS built-in METHODS

// const person = {
//   firstName: 'Russell',
//   lastName: 'Crowe',
//   birthYear: 1964,
//   currentYear: new Date().getFullYear(),
//   job: 'actor',
//   colleagues: ['All', 'Salma', 'Angelina'],
//   hasOscar: true,

//   // calcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // }

//   // calcAge: function () {
//   //   return this.currentYear - this.birthYear

//   calcAge: function () {
//     this.age = this.currentYear - this.birthYear;
//     return this.age;
//   },

//   getBio: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasOscar ? 'Oscar' : 'no Oscars'}.`;
//   }

// }

// console.log(person.calcAge());

// console.log(person.age);
// console.log(person.age);
// console.log(person.age);

// console.log(person);

// //Challenge
// // 'Russell is a 59-year old actor, and he has Oscar'

// console.log(person.getBio());

////////////////////////////////////
// ITERATION: THE FOR LOOP

// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');
// console.log('Lifting weights repetition 3 🏋️');
// console.log('Lifting weights repetition 4 🏋️');
// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');
// console.log('Lifting weights repetition 7 🏋️');
// console.log('Lifting weights repetition 8 🏋️');
// console.log('Lifting weights repetition 9 🏋️');
// console.log('Lifting weights repetition 10 🏋️');

// // for loop keeps running while condition is TRUE
// for (let i = 1; i <= 30; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// }


// LOOPING ARRAYS, BREAKING AND CONTINUING

// const personArray = [
//   'Russell',
//   'Crowe',
//   2023 - 1964,
//   'actor',
//   ['All', 'Sandra', 'Joaquin'],
//   true,
//   1
// ];

// const types = [];

// for (let i = 0; i < personArray.length; i++) {
//   // Reading  values from array
//   console.log(personArray[i], typeof personArray[i]);

//   // Filling types array
//   // types[i] = typeof personArray[i]
//   types.push(typeof personArray[i])

// }

// console.log(types);

// const years = [1981, 2007, 1964, 2018];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// // CONTINUE and BREAK Statements in the FOR loop

// // continue - exit from current iteration loop and continue to another.
// // break totally 'kill' loop.

// // we want loop only through strings in array 
// console.log('---Only strings---');
// for (let i = 0; i < personArray.length; i++) {
//   if (typeof personArray[i] !== 'string') continue
//   console.log(personArray[i], typeof personArray[i]);
// }

// // log no other elements after found number
// console.log('---Break with number---');
// for (let i = 0; i < personArray.length; i++) {
//   if (typeof personArray[i] === 'number') break
//   console.log(personArray[i], typeof personArray[i]);
// }

//LOOPING BACKWARDS AND LOOPS IN LOOPS

// const personArray = [
//   'Russell',
//   'Crowe',
//   2023 - 1964,
//   'actor',
//   ['All', 'Sandra', 'Joaquin'],
//   true
// ];


// //LOOP in BACKWARDS
// for (let i = personArray.length - 1; i >= 0; i--) {
//   console.log(i, personArray[i]);
// }

// // LOOP inside LOOP
// // GYM example. we have 3 exercises and want log five for each exercises.

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`-----STARTING EXERCISE ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weigth repetition ${rep} 🏋️`);
//   }
// };

////////////////////////////////////
// ITERATION: THE WHILE LOOP


// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i} 🏋️`);
// };

// WHILE LOOP

// let i = 1;
// while (i <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${i} 🏋️`);
//   i++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end... You rolled ${dice}`);
// }
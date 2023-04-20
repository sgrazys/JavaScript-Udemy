'use strict';
///////////////
// DEFAULT PARAMETERS

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 399 * numPassengers) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 399

//   const booking = {
//     flightNum,
//     numPassengers,
//     price
//   }
//   console.log(booking);
//   bookings.push(booking,);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 798);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

///////////////
// HOW PASSING ARGUMENTS WORKS: VALUE VS.REFERENCE

// const flight = 'LH123';
// const jokubas = {
//   name: 'Jokubas Grazys',
//   passport: 12634594123,
//   age: 6,
// }

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999',
//     passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 12634594123) {
//     alert('Checked in')
//   } else {
//     alert('Wrong passport!')
//   }
// }

// // checkIn(flight, jokubas);
// // console.log(flight);
// // console.log(jokubas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// }

// newPassport(jokubas)
// checkIn(flight, jokubas);

///////////////
// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS
// Functions accepting callback functions

// const oneWord = function (string) {
//   return string.replaceAll(' ', '').toLowerCase()
// }

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');

//   return [first.toUpperCase(), ...other].join(' ')
// }

// //Hgher-order functionß
// const transformer = function (str, fn) {

//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);


// // JS usese callback all the time
// const highFive = function () {
//   console.log('👋');
// }

// document.body.addEventListener('click', highFive);
// ['Tauras', 'Jokubas', 'Marija'].forEach(highFive);


// const skaiciai = [2, 46, 77, 89, 108, 23, 24];
// const skaiciai2 = [21, 426, 737, 8339, 2108, 2312, 24, 0, 12];


// const filterEven = function (array) {
//   return array.filter(n => n % 2 === 0).join(' ');
// }

// const evenNumbers = function (n, fn) {
//   console.log(`Even numbers are ${fn(n)}`);
// }

// evenNumbers(skaiciai, filterEven);
// evenNumbers(skaiciai2, filterEven);

// const name = function (name) {
//   return name;
// }

// const greeting = function (str, fn, name) {
//   console.log(`${str} ${fn(name)}`);
// }

// greeting('Laba diena', name, 'Saulius');


////////////////////////////////////////
//Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Sveikas')

greeterHey('Tauras');
greeterHey('Jokubas');


greet('Hello')('Marija');

const greet1 = greeting => name => console.log(`${greeting} ${name}`);

greet1('Labas')('Saulius')



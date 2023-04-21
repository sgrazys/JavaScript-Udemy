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

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet('Sveikas')

// greeterHey('Tauras');
// greeterHey('Jokubas');


// greet('Hello')('Marija');

// const greet1 = greeting => name => console.log(`${greeting} ${name}`);

// greet1('Labas')('Saulius')


////////////////////////////////////////
// //THE CALL, APPLY AND BIND METHODS


// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function(){}
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${name} flight ${this.iataCode}${flightNum}` })

//   }

// }

// lufthansa.book('3412', 'Tauras Grazys');
// lufthansa.book('7812', 'Jokubas Zigas');
// console.log(lufthansa);
// console.log(lufthansa.bookings);


// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };


// // CALL METHOD
// const bookFlight = lufthansa.book

// bookFlight.call(eurowings, 'MG2345', 'Marija Graziene');
// bookFlight.call(eurowings, 'SG1892', 'Saulius Grazys');
// console.log(eurowings);
// console.log(eurowings.bookings);


// bookFlight.call(lufthansa, 9999, 'Sandra Bullock');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airlines',
//   iataCode: 'LX',
//   bookings: []
// }

// bookFlight.call(swiss, 6996, 'Angelina Jolie');
// console.log(swiss);
// console.log(swiss.bookings);

// // APPLY METHOD
// const flightDate = [
//   [6996, 'Markas Tvenas'],
//   [7000, 'Arunas Visockas'],
//   [8989, 'Russel Crow']
// ];


// console.log(swiss);
// console.log(swiss.bookings);

// bookFlight.call(swiss, ...flightDate[2])
// bookFlight.call(swiss, ...flightDate[0])

// //BIND METHOD
// // bookFlight.call(eurowings, 'MG2345', 'Marija Graziene');

// const bookEW = bookFlight.bind(eurowings);
// const bookLH = bookFlight.bind(lufthansa);
// const bookSW = bookFlight.bind(swiss);

// bookEW(2367, 'Leo Dicapo');
// console.log(eurowings);

// const bookEW99 = bookFlight.bind(eurowings, 99);
// bookEW99('Michael Jordan');
// bookEW99('Karl Malone');

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++
//   console.log(this.planes);
// }
// // lufthansa.buyPlane()

// const buyPlaneDOM = document.querySelector('.buy');
// // buyPlaneDOM.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// swiss.planes = 100;
// swiss.buyPlaneSW = function () {

//   console.log(this);
//   this.planes++

//   console.log(this.planes);
// }
// buyPlaneDOM.addEventListener('click', swiss.buyPlaneSW.bind(swiss))


// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23)
// // addVAT = value => value + value * 0.23;


// console.log(addVAT(100));
// console.log(addVAT(23));
// console.log(Number(addVAT(23.23).toFixed(2)));

// const pridetiMokescius = function (mokestis) {
//   return function (suma) {
//     return suma + suma * mokestis
//   }
// }

// const pridetiPVM = pridetiMokescius(0.21);
// console.log(pridetiPVM(10));



// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate
//   }
// }

// const addVAT2 = addTaxRate(0.21);

// console.log(addVAT2(100));
// console.log(addVAT2(500));

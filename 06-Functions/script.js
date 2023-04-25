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





//////////////////////////////////////////////

// const flight = `LH234`;
// const person = {
//   name: 'Marolon',
//   passpport: 12345990,


// }


// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name

//   if (passenger.passpport === 12345990) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport num')
//   }

// }

// checkIn(flight, person)
// console.log(flight);
// console.log(person);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// }

// // console.log(oneWord('Saulius Grazys Zigas'));

// const upperFirstWord = function (string) {
//   const [first, ...others] = string.split(' ');

//   return first.toUpperCase() + ' ' + others.join(' ');

// }

// // console.log(upperFirstWord('Saulius Grazys Tauras Grazys'));


// const transfomer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// }

// transfomer('JavaScript is the Best!', oneWord);
// transfomer('JavaScript is the Best!', upperFirstWord);


// const high5 = function () {
//   console.log('👋');
// }

// document.body.addEventListener('click', high5);


// const nameFixer = function (name, surname) {
//   name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
//   surname = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase();

//   return name + ' ' + surname
// }

// console.log(nameFixer('sAuLius', 'grAzys'));

// const corectFullName = function (name, suname, fn) {
//   console.log(`Dear,  ${fn(name, suname)}, welcome to our team! R U ${fn(suname, name)} arn't you?`);
// }


// corectFullName('SAuliuS', 'kalVAsciKautis', nameFixer);


// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterLabas = greet('Labas');
// greeterLabas('Saulius');
// greeterLabas('Tauras');


// const greeterSveikas = greet('Sveikas');
// greeterSveikas('Marija');
// greeterSveikas('Jokubas');

// const greet1 = greeting => name => {
//   return `Arrow: ${greeting} ${name}`;
// }

// const greeter = greet1('Labas');
// console.log(greeter('Saulius'));


// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat at ${this.airline} flight ${this.iataCode}${flightNum} `);
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
//   }
// }



// lufthansa.book(239, 'Saulius Grazys');
// lufthansa.book(793, 'Marija Grazys');
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// }

// const book = lufthansa.book;

// // book(23, 'Tauras Grazys')
// book.call(eurowings, 979, 'Tauras Grazys');
// console.log(eurowings);

// book.call(lufthansa, 444, 'All Paccino');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: []
// }

// book.call(swiss, 686, 'Russel Crowe');
// console.log(swiss);


// const flightDate = [545, 'Sandra Bullock']

// book.apply(swiss, flightDate);
// book.call(swiss, ...flightDate);
// console.log(swiss);

// const lithuania = {
//   airline: 'Lithuania Air Lines',
//   iataCode: 'LAL',
//   bookings: [],
// }

// const bookLAL = book.bind(lithuania);
// const bookEW = book.bind(eurowings);
// const bookLX = book.bind(swiss);
// const bookLH = book.bind(lufthansa);

// bookLAL(1321, 'Nick Cage');

// const bookLALnr = book.bind(lithuania, 777);
// bookLALnr('Leo Dica');
// bookLALnr('Salma Hayke');

// bookLH(888, 'Denzel Washington');
// bookLX(555, 'Clint Eastwood')
// bookEW(777, 'Bruce Lee')

// console.log(lithuania);


// const bookEWnr = book.bind(eurowings, 696);
// bookEWnr('Angelina Jolie')

// const bookLHnr = book.bind(lufthansa, 1212);
// bookLHnr('Meryl Strip');
// bookLHnr('Will Smith');


// // With event listeners
// lufthansa.plane = 300;
// lithuania.plane = 10;

// const buyPlane = function () {
//   console.log(this);
//   this.plane++
//   console.log(this.plane);

// }

// const buyPlaneDOM = document.querySelector('.buy')
// buyPlaneDOM.addEventListener('click', buyPlane.bind(lufthansa))
// buyPlaneDOM.addEventListener('click', buyPlane.bind(lithuania))


// // Partial pplication
// const addTax = (rate, value) => {
//   return value + value * rate / 100
// }
// console.log(addTax(10, 200));

// const addVAT = addTax.bind(null, 21);
// // addVAT = value => value + value * 21
// console.log(addVAT(100));
// console.log(addVAT(300));

// const pridetiMokescius = function (mokestis) {
//   return function (suma) {
//     return suma + suma * mokestis / 100
//   }
// }

// const pridetiPVM = pridetiMokescius(21);
// console.log(pridetiPVM(100));
// console.log(pridetiPVM(300));


///////////////////////////////////////
// IMMEDIATLY INVOKED FUNCTION EXPRESSIONS (IIFE)

// Kai norime kad funkcija pasileistu tik VIENA karta. Tokia funkcija pasileidus pirma karta 'pradingsta'

(function () {
  console.log('Pasirodis tik karta');
  const isPrivate = 23
})();

// console.log(isPrivate);

(() => console.log('Ir sis pasirodys tik karta'))();

{
  const isPrivate = 23;
  var notPrivate = 11;
}

// console.log(isPrivate);
console.log(notPrivate);
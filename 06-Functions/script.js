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

const flight = 'LH123';
const jokubas = {
  name: 'Jokubas Grazys',
  passport: 12634594123,
  age: 6,
}

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999',
    passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 12634594123) {
    alert('Check in')
  } else {
    alert('Wrong passport!')
  }
}

checkIn(flight, jokubas);

console.log(flight);
console.log(jokubas);

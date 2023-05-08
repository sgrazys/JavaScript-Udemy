'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////// CONVERTING AND CHECKING NUMBERS /////////////


// console.log(23 === 23.0);
// // Base 10 - 0 to 9. 1 
// // Binary 2 - 0 to 1

// console.log(0.1 + 0.2);


// console.log(Number('21'));
// console.log(+'21');

// // Parsing - is stringo istraukia skaiciu, jeigu jis/ jie  yra pirmieji simboliai stringe.
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e30px', 10));

// console.log(Number.parseInt(`  2.5rem  `));
// console.log(Number.parseFloat(`  2.5rem  `));

// // Check if value is NaN
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20s'));
// console.log(Number.isNaN(20 / 0));


// // isFinite - geriausias buda tikrinti ar value yra skaicius?
// console.log(Number.isFinite(23));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(+'23d'));
// console.log(Number.isFinite(23 / 0));
// console.log(Number.isFinite(33, 5));

// // isIntiger - tikrina ar skacius yra sveikas
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.5));
// console.log(Number.isInteger(23 / 0));


///////////// MATH & ROUNDING /////////////

// // istaraukia sakni
// console.log(Math.sqrt(121));
// console.log(121 ** 0.5);
// console.log(121 ** (1 / 2));

// //istraukia kubine sakni
// console.log(8 ** (1 / 3));

// // grazina didziausia reiksme
// console.log(Math.max(89, 3.5, 23, 18));
// console.log(Math.max(1, 3.5, '23', 18));
// console.log(Math.max(1, 3.5, '23px', 18));

// // grazina maziausi reiksme
// console.log(Math.min(89, 3.5, 23, 18));

// // JS turi ir konstantu pv PY Math.PI
// console.log(Math.PI * Number.parseInt(`10px`) ** 2);

// // Random skaicius
// console.log(Math.trunc(Math.random() * 6) + 1);

// // funkcija generuojanti random skaicius nuo iki
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));



// // SVEIKUJU SKAICIU APVALINIMAS

// // Math.trunc - nuiima skaicius po kableleio ir grazina tik sveikaji skaiciu
// console.log(Math.trunc(-23.54));

// // Math.round() su apvalina iki artimiausio sveikojo skaiciaus
// console.log(Math.round(23.3));
// console.log(Math.round(23.9));

// // Math.ceil() - suapvalina iki artmiausio sveikojo skaiciaus i didesne puse
// console.log(Math.ceil(23.1));
// console.log(Math.ceil(23.9));


// // // Math.flooe() - suapvalina iki artmiausio sveikojo skaiciaus i mazaja puse
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));


// // NESVEIKUJU SKAICIU APVALINIMAS
// console.log((2.7).toFixed());
// console.log((2.7).toFixed(3));
// console.log(+(2.34567).toFixed(2));


///////////// CREATING DATES /////////////

// //Create a date
// const now = new Date();
// console.log(now);

// console.log(new Date('May 06 2023 15:36:22'));
// console.log(new Date('1986 October 15'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(1986, 9, 15, 8, 50, 13));
// console.log(new Date(1986, 10, 31));
// console.log(new Date(1986, 10, 33));

// console.log(new Date(0));
// console.log(new Date(54 * 365 * 24 * 60 * 60 * 1000));
// console.log(new Date(259200000));


// Working with dates

// const future = new Date(2037, 9, 15, 8, 50);
// console.log(future);

// // Gauti metus
// console.log(future.getFullYear());

// // Gauti menesi
// console.log(future.getMonth());
// // Gauti diena
// console.log(future.getDate());
// // Gauti valandas
// console.log(future.getHours());
// // Gauti minutes
// console.log(future.getMinutes());

// // gauti savaites diena
// console.log(future.getDay()); // Sekmadienis yra 0; Pirmadienis - 1 , Antradienis - 2 ......

// // Gauti graziai suformatuota datos stringa
// console.log(future.toISOString());

// // Gauti time stampa  - milisekundemis, nuo UnixTime
// console.log(future.getTime());

// // Gauti dabartinio laiko time stampa
// console.log(Date.now());

// future.setFullYear(2023);
// console.log(future);



/////////// Operations  with dates ////////

const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1)) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8));
console.log(days1);


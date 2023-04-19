'use strict';

// Data needed for a later exercise



//////////////////

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Sena sitakse kaip opbj priskirti obj
  // openingHours: openingHours,

  // ES enhanced obj literals - jeigu obj pvadainimas sutampa su musu norimu obj, uztenka parasyti obj pavadinim
  hours,

  order(starterIndex, MainIndex) {
    return (`${this.starterMenu[starterIndex]}, ${this.mainMenu[MainIndex]}`)
  },

  orderDelivery({ categoryIndex = 0, starterIndex = 0, mainIndex = 0, hours = '20:00', adress = 'Rinktines 11' }) {
    console.log(`Order received! ${this.categories[categoryIndex]} ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered on ${hours} at ${adress} `);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your  deliscios pasta with ${ing1}, ${ing2} and ${ing3}  `);

  },

  orderPizza(...ingridients) {
    console.log(`Your ordered pizza with: ${ingridients}`);
    console.log(ingridients);
  }
};

// // ///////////////////////////
// //  WORKING WITH STRINGS PART - PRACTICE

const getCode = str => str.toUpperCase().slice(0, 3);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsInfoArr = flights.split('+');
for (const flight of flightsInfoArr) {
  const [status, from, to, time] = flight.split(';');
  const result = `${status.startsWith('_Delayed') ? '🔴' : ''}${status.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44)

  console.log(result);

}


// // ///////////////////////////
// //  WORKING WITH STRINGS PART - 3

// // SPLIT and JOIN
// console.log('a+very+nice+string'.split('+'));
// console.log('Saulius Grazys'.split(' '));

// const [firstName, lastName] = 'Saulius Grazys'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);


// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }

//   console.log(namesUpper.join(' '));

// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('tauras grazys');

// //PADDING

// const message = 'Go to gate 23!'

// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Tauras'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')

// }

// console.log(maskCreditCard(57057366));
// console.log(maskCreditCard(3452832845705865));
// console.log(maskCreditCard('89346568702398572308476502'));

// // REPEAT

// const message2 = 'Bad weather... All departures delayed! ';
// console.log(message2.repeat(3));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in the line ${'🛩️'.repeat(n)}.`);
// }

// planesInLine(4);
// planesInLine(3);
// planesInLine(12);

// // ///////////////////////////
//  WORKING WITH STRINGS PART - 2

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('tauras'.toUpperCase());

// //FIX cpitalisation in name
// const passenger = 'joKubAS' // Tauras

// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const fixName = function (name) {
//   const nameLower = name.toLocaleLowerCase();
//   const fixedName = nameLower[0].toUpperCase() + nameLower.slice(1);
//   console.log(fixedName);
// }

// fixName('sAulIUS');
// fixName('Marija');
// fixName('TauRas');
// fixName('JOKubAS');


// // Comparing email
// const email = 'hello@labas.lt'
// const loginEmail = '  Hello@LAbas.LT \n' // \n - ENTER

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const fixedEmail = loginEmail.toLocaleLowerCase().trim;
// console.log(fixedEmail);

// if (email === fixedEmail) console.log('Good to GO!!!!!');

// const compareEmails = function (email, checkEmail) {
//   const correct = email.toLowerCase();

//   if (correct === checkEmail) console.log('Good to Go!');
//   else console.log('Bad email');
// }

// compareEmails('saulius@grazys.lt', 'saulius@grazys.lt');

// // REPLACE parts of strings

// const priceGB = `288,97£`;
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);


// const announcment = 'All passengers come to boarding door 23. Boarding door 23!';
// // console.log(announcment.replace(/door/g, 'gate')); // REG EXPRESION
// console.log(announcment.replaceAll('door', 'gate'));


// //BOOLEANS
// const plane = 'Airbus A320neo';

// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of Airbus Family');

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) console.log('You are not allowed on borad');
//   else console.log('Welcome aboard!');
// }


// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camere');
// checkBaggage('Got snacks and gun for protection');


// ///////////////////////////
// // WORKING WITH STRINGS PART - 1 

// const airline = 'TAP Air Portugal';
// const plane = 'A320';


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);
// console.log(airline.length);
// console.log('B737'.length);

// //METHODS
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seats
//   const s = seat.slice(-1);

//   if (s === 'B' || s === 'E') console.log(`${seat} IS in the middle`);

//   else console.log(`${seat} NOT in the middle`);

// }

// checkMiddleSeat('11A');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// // /////////////////////////
// // // MAPS - from Object to map

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🥳'],
//   [false, 'Try again!']
// ])

// // // MAPS - ITERATION
// console.log(question);
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Choose answer'));
// // console.log(answer);

// // console.log(question.get(answer === question.get('correct')));


// // Convert map to array
// console.log([...question]);
// console.log(question);

// // take keys, values
// console.log([...question.keys()]);
// console.log([...question.values()]);

// /////////////////////////
// // MAPS

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open.')
//   .set(false, 'We are closed.');


// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));


// console.log(rest.has('categories'));
// rest.delete(2)
// // rest.clear()

// const arr = [1, 2]
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading')


// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));


/////////////////////////
// SETS

// const ordersSet = new Set(['Pasta',
//   'Pizza',
//   'Rissoto',
//   'Pizza',
//   'Rissoto',
//   'Pizza',
// ])
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Brusketa');
// ordersSet.add('Brusketa');
// ordersSet.delete('Rissoto')
// // ordersSet.clear()

// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Shefas', 'Waiter', 'Manager', 'Shefas', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Shefas', 'Waiter', 'Manager', 'Shefas', 'Waiter']).size);

// console.log(new Set('SauliusGrazys').size);



/////////////////////////
// LOOPING OBJECTS. OBJ KEYS, VALUS, ENTRIES

// // Property NAMES
// const properties = Object.keys(hours);
// // console.log(properties);

// let str = `Restaurant is opening ${properties.length} days per week: `;
// for (const day of properties) {
//   str += `${day}, `

// }
// console.log(str);

// // Prpperty VALUES
// const openingHours = Object.values(hours)
// // console.log(openingHours);

// //LOOP OVER ENTIRE OBJECT
// const entries = Object.entries(hours)
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we are open at ${open} and close at ${close}`);
// }


/////////////////////////
// OPTIONAL CHANGING

// if (restaurant.hours && restaurant.hours.mon) console.log(restaurant.hours.mon.open);

// // console.log(restaurant.hours.mon.open);

// //WITH OPTIONAL CHAINING
// console.log(restaurant.hours.mon?.open);
// console.log(restaurant.hours?.mon?.open);

// //EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const openHour = restaurant.hours[day]?.open ?? 'colsed';
//   console.log(`Restaurant on ${day} is open at ${openHour}`);
// }

// // METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.uzsakymas?.(0, 1) ?? 'Method does not exist');

// //ARRAYS
// const users = [{
//   name: 'Marlon', surname: 'Brando', email: 'marlon@brando.com'
// },
// { name: 'Russel', surname: 'Crowe' }
// ];
// // const users = [];

// console.log(users.length);
// console.log(users[0]?.name ?? 'User item is empty');
// console.log(users[1]?.pastas ?? 'Pastas don\'t exist');
// console.log(users[1]?.surname ?? 'User item is empty');

// // //////////////////////
// // // FOR-OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// for (const dish of menu) console.log(dish);

// for (const [nr, dish] of menu.entries()) {
//   console.log(`${ nr + 1}: ${ dish } `);
// }

// console.log([...menu.entries()]);

// //////////////////////
// // LOGICAL ASSIGNMENT OPERATORS

// const rest1 = {
//   name: 'Capr1',
//   // numGuests: 20
//   numGuests: 0
// }
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Jean Luca'
// }

// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10


// // OR assignment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // console.log(rest1.numGuests);
// // console.log(rest2.numGuests);

// // Nullish assignement operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

// // && assignment operator
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);
//Nulish coalescing operator ---> ??
// Nulish values: null ir undetified (NOT 0 ar '' )
// restaurant.numGuests = null;

// const guests = restaurant.numGuests || 15
// console.log(guests);


// const guestsCorrect = restaurant.numGuests ?? 15
// console.log(guestsCorrect);

// Logical operators can use ANY data type, return ANY data type, and they are used for short-cutting
// console.log(`
// -----OR-----
// `);
// // Grazina pirma TRUE reiksme
// console.log(3 || 'Tauras');
// console.log('' || 'Tauras'); // Tauras
// console.log(true || 0); //True
// console.log(undefined || null); // null

// console.log(undefined || '' || null || 0 || 'Jokubas');
// console.log(undefined || '' || null || 0);
// console.log(null || '' || null || 0 || undefined);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 15
// console.log(guests2);

// console.log(`
// -----AND-----
// `);

// //Grazina pirma false reiksme
// console.log(0 && 'Jokubas');
// console.log('Tauras' && 0);
// console.log('Tauras' && 'Jokubas' && 0);
// console.log('Tauras' && 0 && 'Jokubas');
// console.log('Tauras' && 1 && 'Jokubas' && 100); // jeigu visu yra true grazina paskutine reiksme
// console.log(!'Tauras' && !null && !0 && !'' && null && undefined);


// console.log('Hello' && 23 && null && 'Jokubas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('grybais', 'shpinatais')
// }

// restaurant.orderPizza && restaurant.orderPizza('grybais', 'spinatais');


// console.log(`
// -----PASIZAIDIMAS-----
// `);


// const b2 = restaurant.name || 'Juodasis kalnas'
// const c2 = restaurant.pavadinimas || 'Juodasis kalnas'

// console.log(b2);
// console.log(c2);

// restaurant.orderDelivery && restaurant.orderDelivery(2, 1, '19:45', 'Kalvariju 19');
// restaurant.orderPristatymas && restaurant.orderDelivery(2, 1, '19:45', 'Kalvariju 19');



// //////////////////////////////////
// // 1) DESTRUCTURING

// //Rest Pattern (...)

// // SPREAD operator becaus on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// // RESR operator becaus on LEFT side of =

// const [a, b, ...rest] = arr;
// console.log(a, b, rest);


// const [pizza, , rissoto, ...restMainMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, rissoto, restMainMenu);

// //Object
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(sat);
// console.log(weekdays);

// // 2) FUNCTIONS
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   console.log(sum);
// }

// add(2, 3)
// add(5, 3, 7, 2)
// add(4, 5, 7, 2, 7, 9, 11)


// const x = [23, 7, 5]
// add(...x)

// restaurant.orderPizza('Cheese', 'Saliami', ' Ham', ' Mushrooms')
// restaurant.orderPizza('Cheese', 'Barbecu sauce ')
// restaurant.orderPizza('Suris', ' padazas', ' austres', ' krevetes')

//////////////////////////////////
//Spread Operator (...)

// const arr = [7, 8, 9]
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //SPREAD Array
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// //SPREAD as arguments in functions
// console.log(...newArr);

// //Spread to extend array
// const newMenu = [...restaurant.mainMenu, 'Lasagnia'];
// console.log(newMenu);

// //COPY array | Shallow copy
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 or more arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets... NOT objects!

// //SPREAD on string
// const str = 'Marlon';
// const letters = [...str, ' ', 'B.'];
// console.log(letters);
// console.log(...str)

// // get ingridients to orderPasta method from prompt window
// // const ingridients = [prompt('Let\'s make pasta! Ingridient 1: '), prompt('Ingridient 2: '), prompt('Ingridient 3: ')];
// // restaurant.orderPasta(...ingridients);

// // Objects
// const newRestaurant = { since: '1964', ...restaurant, founder: 'Guisepe' }
// console.log(newRestaurant);

// // Shallow copy of objects
// const restaurantCopy = { ...restaurant }
// restaurantCopy.name = 'Ristorante ROMA';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// console.log(restaurant.order(3, 1));

// restaurant.orderDelivery({
//   categoryIndex: 3,
//   starterIndex: 1,
//   mainIndex: 1,
//   hours: '17:30',
//   adress: 'Kalvariju 12'
// });

// restaurant.orderDelivery({})

// /////////////////////////////////
// //Destructuring Objects
// const { firstName, categories, openingHours } = restaurant;
// console.log(firstName, categories, openingHours);

// const { name: restaurantfirstName, openingHours: hours, categories: tags } = restaurant
// console.log(restaurantfirstName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);


// /////////////////////////////////
// //Destructuring Arrays
// const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c);

// // DESTRUCTURISATION
// const [x, y, z] = arr
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories
// console.log(main, secondary);


// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);


// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// // Receive 2 return values from function
// const [starter, mainDish] = restaurant.order(2, 0);
// console.log(starter, mainDish);


// // Nested destruturing
// const nested = [2, 4, [5, 6]];
// // const [firstValue, , array] = nested;
// // console.log(firstValue, array);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //Default values
// const [p = 1, q = 1, r = 1] = [8]
// console.log(p, q, r);


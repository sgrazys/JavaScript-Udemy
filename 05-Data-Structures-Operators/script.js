'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, MainIndex) {
    return (`${this.starterMenu[starterIndex]}, ${this.mainMenu[MainIndex]}`)
  },

  orderDelivery: function ({ categoryIndex = 0, starterIndex = 0, mainIndex = 0, hours = '20:00', adress = 'Rinktines 11' }) {
    console.log(`Order received! ${this.categories[categoryIndex]} ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered on ${hours} at ${adress} `);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

console.log(restaurant.order(3, 1));

restaurant.orderDelivery({
  categoryIndex: 3,
  starterIndex: 1,
  mainIndex: 1,
  hours: '17:30',
  adress: 'Kalvariju 12'
});

restaurant.orderDelivery({})

/////////////////////////////////
//Destructuring Objects
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);


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
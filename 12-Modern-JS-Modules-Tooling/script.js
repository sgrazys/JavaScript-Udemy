// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
// console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 5, 2);
add('bread', 15, 20);
add('apples', 5, 3);

console.log(cart);

////////////////////
// TOP LEVEL-AWAIT

// console.log('Start fetching');
// const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await resp.json();

// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
// 	const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await resp.json();
// 	console.log(data);

// 	return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// // lastPost.then((last) => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

///////////////////////////////////////
// The Module Pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

///////////////////////////////////////
// CommonJS Modules
// Export
// export.addTocart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// };

// // Import
// const { addTocart } = require('./shoppingCart.js');

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
	cart: [
		{ product: 'bread', quantity: 5 },
		{ product: 'pizza', quantity: 5 },
	],
	user: { loggeIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggeIn = false;
console.log(stateClone);
console.log((state.cart[1].quantity = 15));
console.log(stateDeepClone);

if (module.hot) {
	module.hot.accept();
}

class Person {
	greeting = 'Hey';
	constructor(name) {
		this.name = name;
		console.log(`${this.greeting}, ${this.name}`);
	}
}

const saulius = new Person('Saulius');

console.log('Saulius' ?? null);
console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve('TEST').then((x) => console.log(x));

import 'core-js/stable';

// Poliffilling async functions
import 'regenerator-runtime/runtime';

// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 5, 2);
add('bread', 15, 20);
add('watermelon', 12, 4);
add('bannana', 122, 14);

console.log(cart);

////////////////////
// TOP LEVEL-AWAIT

// console.log('Start fetching');
// const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await resp.json();

// console.log(data);
// console.log('Something');

const getLastPost = async function () {
	const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await resp.json();
	console.log(data);

	return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

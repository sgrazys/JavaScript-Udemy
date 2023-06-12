// Exporting module
console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

const addToCart = function (product, quantity, price) {
	cart.push({
		product,
		quantity,
		price,
		totalPrice: quantity * price,
	});
	console.log(
		`${quantity} ${product} was added to cart. Total of ${product} price: ${
			price * quantity
		}`
	);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity, price) {
	cart.push({
		product,
		quantity,
		price,
		totalPrice: quantity * price,
	});
	console.log(
		`${quantity} ${product} was added to cart. Total price of ${product}:  ${
			price * quantity
		}`
	);
}

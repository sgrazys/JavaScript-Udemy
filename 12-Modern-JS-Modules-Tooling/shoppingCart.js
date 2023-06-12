// Exporting module
console.log('Exporting module');

export const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity, price) {
	cart.push({
		product,
		quantity,
		price:
			product === 'pizza'
				? quantity * price
				: product === 'bread'
				? quantity * price
				: quantity * price,
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
		price:
			product === 'pizza'
				? quantity * price
				: product === 'bread'
				? quantity * price
				: quantity * price,
	});
	console.log(
		`${quantity} ${product} was added to cart. Total of ${product} price: ${
			price * quantity
		}`
	);
}

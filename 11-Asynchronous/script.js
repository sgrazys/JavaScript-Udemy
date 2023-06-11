'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderErr = function (msg) {
	countriesContainer.insertAdjacentText('beforeend', msg);
	// countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
	const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
			+data.population / 1000000
		).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

	countriesContainer.insertAdjacentHTML('beforeend', html);
	countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// XML HTTP request function. OLD SCHOOL

// const getCountryData = function (country) {
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v2/name/${country}`);
// 	request.send();

// 	request.addEventListener('load', function () {
// 		console.log(this.responseText);

// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
// 			+data.population / 1000000
// 		).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;

// 		countriesContainer.insertAdjacentHTML('beforeend', html);
// 		countriesContainer.style.opacity = 1;
// 	});
// };

// getCountryData('portugal');

////////////////////////
// SEQUENCY OF AJAX CALL

// const getCountryDataAndNeighbour = function (country) {
// 	// AJAX call country 1
// 	const request = new XMLHttpRequest();
// 	request.open('GET', `https://restcountries.com/v2/name/${country}`);
// 	request.send();

// 	request.addEventListener('load', function () {
// 		const [data] = JSON.parse(this.responseText);
// 		console.log(data);

// 		// render country 1
// 		renderCountry(data);

// 		// Get neighbour country 2
// 		const neighbour = data.borders?.[0];
// 		if (!neighbour) return;

// 		// AJAX call country 2
// 		const request2 = new XMLHttpRequest();
// 		request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// 		request2.send();

// 		request2.addEventListener('load', function () {
// 			const data2 = JSON.parse(this.responseText);
// 			console.log(data2);

// 			renderCountry(data2, 'neighbour');
// 		});
// 	});
// };

// // getCountryDataAndNeighbour('portugal');
// getCountryDataAndNeighbour('portugal');

// // CALLBACK HELLL
// setTimeout(() => {
// 	console.log('1 second passed');
// 	setTimeout(() => {
// 		console.log('2 seconds passed');
// 		setTimeout(() => {
// 			console.log('3 second passed');
// 			setTimeout(() => {
// 				console.log('4 second passed');
// 				setTimeout(() => {
// 					console.log('5 second passed');
// 					setTimeout(() => {
// 						console.log('6 second passed');
// 					}, 1000);
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);

// 	}, 1000);
// }, 1000);

//////////////////////////
// PROMISES AND FETCH API

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then(function (response) {
// 			console.log(response);
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 			renderCountry(data[0]);
// 		});
// };

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

/////////////////////
// https://restcountries.com/v2/name/{name}
// https://restcountries.com/v2/alpha/{code}

const getJSON = function (url, errMsg = 'Something went wrong.') {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errMsg} (${response.status})`);
		return response.json();
	});
};

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v2/name/${country}`)
// 		.then((response) => {
// 			console.log(response);
// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => {
// 			renderCountry(data[0]);
// 			// const neighbour = data[0]?.borders?.[1];
// 			const neighbour = 'sdfdgsfg';

// 			if (!neighbour) return;

// 			return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// 		})
// 		.then((response) => {
// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => renderCountry(data, 'neighbour'))
// 		.catch((err) => {
// 			console.error(`${err}💥💥💥💥`);
// 			renderErr(`Something went wrong 💥💥💥 ${err.message}. Try again.`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// const getCountryData = function (country) {
// 	getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
// 		.then((data) => {
// 			renderCountry(data[0]);
// 			const neighbour = data[0]?.borders?.[1];

// 			if (!neighbour) throw new Error('No neighbour found');

// 			return getJSON(
// 				`https://restcountries.com/v2/alpha/${neighbour}`,
// 				'Country not found'
// 			);
// 		})
// 		.then((response) => {
// 			if (!response.ok)
// 				throw new Error(`Country not found (${response.status})`);

// 			return response.json();
// 		})
// 		.then((data) => renderCountry(data, 'neighbour'))
// 		.catch((err) => {
// 			console.error(`${err}💥💥💥💥`);
// 			renderErr(`Something went wrong 💥💥💥 ${err.message}. Try again.`);
// 		})
// 		.finally(() => {
// 			countriesContainer.style.opacity = 1;
// 		});
// };

// btn.addEventListener('click', function () {
// 	getCountryData('lithuania');
// });

// getCountryData('australia');

///////////////////////
// Event loop on practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then((res) => console.log(res));

// Promise.resolve('Resolved promise 2').then((res) => {
// 	for (let i = 0; i < 1000000000; i++) {}
// 	console.log(res);
// });
// console.log('Test end');

///////////////////////
// BUILDING A PROMISE

// const lotteryPromise = new Promise(function (resolve, reject) {
// 	console.log('Lottery is running...');
// 	setTimeout(function () {
// 		if (Math.random() >= 0.5) {
// 			resolve('You WIN 💶');
// 		} else {
// 			reject(new Error('You lost...'));
// 		}
// 	}, 3000);
// });

// lotteryPromise
// 	.then((res) => console.log(res))
// 	.catch((err) => console.error(err));

// // Promisifyin setTimout()
// const wait = function (seconds) {
// 	return new Promise(function (resolve) {
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// wait(1)
// 	.then(() => {
// 		console.log('1 second passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('2 seconds passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('3 seconds passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('4 seconds passed');
// 		return wait(1);
// 	})
// 	.then(() => {
// 		console.log('5 seconds passed');
// 		return wait(1);
// 	});

// // setTimeout(() => {
// // 	console.log('1 second passed');
// // 	setTimeout(() => {
// // 		console.log('2 seconds passed');
// // 		setTimeout(() => {
// // 			console.log('3 second passed');
// // 			setTimeout(() => {
// // 				console.log('4 second passed');
// // 				setTimeout(() => {
// // 					console.log('5 second passed');
// // 					setTimeout(() => {
// // 						console.log('6 second passed');
// // 					}, 1000);
// // 				}, 1000);
// // 			}, 1000);
// // 		}, 1000);
// // 	}, 1000);
// // }, 1000);

// Promise.resolve('ABC').then((x) => console.log(x));
// Promise.reject(new Error('Klaida')).catch((y) => console.error(y.message));

// const getPosition = function () {
// 	return new Promise(function (resolve, reject) {
// 		// navigator.geolocation.getCurrentPosition(
// 		// 	(position) => resolve(position),
// 		// 	(err) => reject(err)
// 		// );
// 		navigator.geolocation.getCurrentPosition(resolve, reject);
// 	});
// };

// getPosition().then((pos) => console.log(pos));

// const wait = function (seconds) {
// 	return new Promise(function (resolve) {
// 		setTimeout(resolve, seconds * 1000);
// 	});
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
// 	return new Promise(function (resolve, reject) {
// 		const img = document.createElement('img');
// 		img.src = imgPath;

// 		img.addEventListener('load', function () {
// 			imgContainer.append(img);
// 			resolve(img);
// 		});
// 		img.addEventListener('error', function () {
// 			reject(new Error('Image not found'));
// 		});
// 	});
// };

// let currentImg;
// createImage('img/img-1.jpg')
// 	.then((img) => {
// 		currentImg = img;
// 		console.log('Image 1 loaded');
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 		return createImage('img/img-2.jpg');
// 	})
// 	.then((img) => {
// 		currentImg = img;
// 		console.log('Image 2 loaded');
// 		return wait(2);
// 	})
// 	.then(() => {
// 		currentImg.style.display = 'none';
// 	})
// 	.catch((err) => console.error(err));

///////////////////////////
// CONSUMING PROMISES WITH ASYNC / AWAIT

const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

// fetch(`https://restcountries.com/v2/name/${country}`).then((res) =>
// 	console.log(res)
// );

// const whereAmI = async function () {
// 	//Geolocation
// 	const pos = await getPosition();
// 	const { latitude: lat, longitude: lng } = pos.coords;

// 	// Reversed geocoding
// 	const resGeo = await fetch(`http://geocode.xyz/${lat},${lng}?geoit=json`);
// 	const dataGeo = await resGeo.json();
// 	console.log(dataGeo);

// 	// Country Data
// 	const resp = await fetch(
// 		`https://restcountries.com/v2/name/${dataGeo.country}`
// 	);
// 	const data = await resp.json();
// 	renderCountry(data[0]);
// };

// whereAmI();
// console.log('FIRST');

///////////////////////////
// ERROR HANDLING WITH TRY ...CATCH

// try {
// 	let y = 1;
// 	const x = 2;
// 	y = 3;
// } catch (err) {
// 	alert(err.message);
// }

// const whereAmI = async function () {
// 	try {
// 		//Geolocation
// 		const pos = await getPosition();
// 		const { latitude: lat, longitude: lng } = pos.coords;

// 		// Reversed geocoding
// 		const resGeo = await fetch(
// 			`http://geocode.xyz/${lat},${lng}?geoit=json`
// 		);

// 		if (!resGeo.ok) throw new Error(`Problem getting location`);

// 		const dataGeo = await resGeo.json();

// 		// Country Data
// 		const resp = await fetch(
// 			`https://restcountries.com/v2/name/${dataGeo.country}`
// 		);
// 		if (!resp.ok) throw new Error(`Problem getting country`);

// 		const data = await resp.json();
// 		renderCountry(data[0]);
// 	} catch (err) {
// 		console.error(`💥💥💥💥${err}`);
// 		renderErr(`💥 ${err.message}`);
// 	}
// };

// whereAmI();

// console.log('FIRST');

///////////////////////////
// RETURNING VALUES FROM ASYNC FUNCTIONS

// const whereAmI = async function () {
// 	try {
// 		//Geolocation
// 		const pos = await getPosition();
// 		const { latitude: lat, longitude: lng } = pos.coords;

// 		// Reversed geocoding
// 		const resGeo = await fetch(
// 			`http://geocode.xyz/${lat},${lng}?geoit=json`
// 		);

// 		if (!resGeo.ok) throw new Error(`Problem getting location`);
// 		const dataGeo = await resGeo.json();

// 		// Country Data
// 		const resp = await fetch(
// 			`https://restcountries.com/v2/name/${dataGeo.country}`
// 		);
// 		if (!resp.ok) throw new Error(`Problem getting country`);

// 		const data = await resp.json();
// 		renderCountry(data[0]);

// 		return `You are in ${dataGeo.city}, ${dataGeo.country}`;
// 	} catch (err) {
// 		console.error(`💥💥💥💥${err}`);
// 		renderErr(`💥 ${err.message}`);

// 		// Reject promise returned from async functions
// 		throw err;
// 	}
// };

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// // 	.then((location) => console.log(`2: ${location} 🌆`))
// // 	.catch((err) => console.log(`2: ${err.message}💥 `))
// // 	.finally(() => console.log('3: Finished getting location'));

// (async function () {
// 	try {
// 		const resp = await whereAmI();
// 		console.log(`2: ${resp}`);
// 	} catch (err) {
// 		console.log(`2: ${err.message}💥 `);
// 	}
// 	console.log('3: Finished getting location');
// })();

///////////////////////////
// RUNING PROMISES IN PARALLEL

const get3Contries = async function (c1, c2, c3) {
	try {
		// const [data1] = await getJSON(
		// 	`https://restcountries.com/v2/name/${c1}`
		// );
		// const [data2] = await getJSON(
		// 	`https://restcountries.com/v2/name/${c2}`
		// );
		// const [data3] = await getJSON(
		// 	`https://restcountries.com/v2/name/${c3}`
		// );

		const data = await Promise.all([
			getJSON(`https://restcountries.com/v2/name/${c1}`),
			getJSON(`https://restcountries.com/v2/name/${c2}`),
			getJSON(`https://restcountries.com/v2/name/${c3}`),
		]);

		console.log(data.map((cur) => cur[0].capital));
	} catch (err) {
		console.error(`${err.message}`);
	}
};

get3Contries('lithuania', 'portugal', 'tanzania');

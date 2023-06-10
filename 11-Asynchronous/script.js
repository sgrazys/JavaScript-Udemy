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
	// countriesContainer.style.opacity = 1;
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

const getCountryData = function (country) {
	getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
		.then((data) => {
			renderCountry(data[0]);
			const neighbour = data[0]?.borders?.[1];

			if (!neighbour) throw new Error('No neighbour found');

			return getJSON(
				`https://restcountries.com/v2/alpha/${neighbour}`,
				'Country not found'
			);
		})
		.then((response) => {
			if (!response.ok)
				throw new Error(`Country not found (${response.status})`);

			return response.json();
		})
		.then((data) => renderCountry(data, 'neighbour'))
		.catch((err) => {
			console.error(`${err}💥💥💥💥`);
			renderErr(`Something went wrong 💥💥💥 ${err.message}. Try again.`);
		})
		.finally(() => {
			countriesContainer.style.opacity = 1;
		});
};

btn.addEventListener('click', function () {
	getCountryData('lithuania');
});

getCountryData('australia');

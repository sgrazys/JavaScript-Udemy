'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //SLICE - Grazina nauja value, NEMUTUOJA ORIGINALO

// let arr = ['a', 'b', 'c', 'd', 'e'];


// console.log(arr.slice(2)); // GRAZINA VISUS ELEMENTUS NUO 2-o indexo
// console.log(arr.slice(2, 4)); // GRAZINA NUO 2-o INDEXO IKI 3 (imtiniai) // 4-o NEITRAUKIA
// console.log(arr.slice(-1)); // GRAZINA PASKUTINI NARI
// console.log(arr.slice(-2)); // GRAZINA PASKUTINIUS 2 NARIUS
// console.log(arr.slice(1, -2)); // GRAZINA VISKA NUO 1-o INDEXO BE PASKUTINIU 2ju NARIU.
// console.log(arr.slice()); // MASYVO KOPIJA. REALIAI NAUDOJAMA KAI NORIME CHANININTI METODUS.
// console.log([...arr]) // KOPIJUOTI GALIMA IR NAUDOJANRT SPREAD OPERATORIU


///////////////////
// //SPLICE - GRAZINA ISSPLICENT'us ELEMENTUS !! MUTUOJA ORIGINALA!!
// // console.log(arr.splice(2)); // GRAZINS ELEMNTUS KURIUOS ISPLICE'inam
// arr.splice(-1); // ISTRINA PASKUTINI MASYVO ELEMENTA
// console.log(arr);
// arr.splice(1, 2); // PRALEIDZIA PIRMAJI NARI IR ISTRINA SEKANCIUS 2
// console.log(arr);  // MUTUOJA ORIGINALA GRAZINA ELEMENTUS KURIE NEBUVO ISSPLICE'inti.

////////////////////////
// //REVERSE - REVERSINA (apsuka) ELEMENTUS MASYVE. !!MUTUOJA ORIGINALA
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2) // ORIGINALUS MASYVAS;
// arr2.reverse() // APSUKA, REVERSINA MASYVO ELEMENTUS. 
// console.log(arr2); // GRAZINA MUTUOTA ORIGINALA (APVESRTA)

////////////////////
// // CONCAT - SUJUNGIU DU MASYVUS I VIENA. ORIGINALU NEMUTUOJA
// const letters = arr.concat(arr2)
// console.log(letters);

// // VEIKIA KAIP IR SPREAD OPERATORIUS
// console.log([...arr, ...arr2]);


//////////////////
// //JOIN - SUJUNGIA MASYVO ELEMENTUS SU NURODYTU 'sujungeju'. IR GRAZINA STRINGA
// console.log(letters.join(' - '));
// console.log(letters.join('+'));

/////////////
// AT - PAIMA NURODYTO MASYVO NARI. !! ORIGINALO NEMUTUOJA !!

// const arr = [23, 77, 69];

// console.log(arr.at(0)); // TAI NAUJA ES2022 SINTAKSE
// console.log(arr[0]); // TAPATI DARO IR BRACKET NOTATION, tai senesne sintaks

// // PAIIMAME PASKUTINI NARI
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1))

// console.log('Tauras'.at(0));
// console.log('Tauras'.at(-1));

////////////////////
// FOR EACH - loopas


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (let i = 0; i < movements.length; i++) {
//   if (movements[i] > 0) console.log(`Deposit ${movements[i]}`);
//   if (movements[i] < 0) console.log(`Withdraw ${movements[i]}`);
// }

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} :You withdrew ${Math.abs(movement)}`);
//   }
// }


// console.log(`
// ----FOR EACH----
// `);

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// })

// // 0: function(200)
// // 1: function(450)
// // 2: function(-400)
// // 3: ....


////////////////
// FOR- EACH on MAPS

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// //SET
// const uniqueItems = new Set(['USD', 'GBP', 'EUR', 'USD', 'EUR', 'EUR']);
// console.log(uniqueItems);

// uniqueItems.forEach(function (v, _, s) {
//   console.log(`${v}: ${v}`);
// })


// /////////////////////////////
// // MAP method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1
// const movementsUSD = movements.map(e => e * eurToUsd)

// console.log(movements);
// console.log(movementsUSD);

// const movementsUsd2 = []
// for (const mov of movements) {
//   movementsUsd2.push(mov * eurToUsd)
// }
// console.log(movementsUsd2);

// const movementsDescp = movements.map((e, i) => `Movement ${i + 1}: You ${e > 0 ? 'deposited ' : 'withdrew'} ${Math.abs(e)} `);

// console.log(movementsDescp);



// // /////////////////////////////
// // // FILTER method

// console.log(movements);

// const deposits = movements.filter(e => e > 0);
// console.log(deposits);

// const depositFor = []
// for (const mov of movements) {
//   if (mov > 0) depositFor.push(mov)
// }

// console.log(depositFor);

// const withdrawals = movements.filter(e => e < 0);
// console.log(withdrawals);




// // /////////////////////////////
// // // REDUCE method

// console.log(movements);

// // ccumulator (t) is like a snowball 
// const balance = movements.reduce((t, v) => t + v, 0)
// console.log(balance);

// let balanceFor = 0;
// for (const mov of movements) {
//   balanceFor += mov
// }

// console.log(balanceFor);


// /////////////////////////////
// MAX VALUE FROM ARRAY

console.log(movements);

const maxNum = movements.reduce((acc, v) => acc > v ? acc : v);
console.log(`Max value is: ${maxNum}`);
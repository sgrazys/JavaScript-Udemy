'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


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


// // /////////////////////////////
// // MAX VALUE FROM ARRAY

// console.log(movements);

// const maxNum = movements.reduce((acc, v) => acc > v ? acc : v);
// console.log(`Max value is: ${maxNum}`);

// // /////////////////////////////
// // CHAINING METHODS

// console.log(movements);

// const eurToUsd = 1.1

// //PIPELINE
// const totalDepositsInUSD = movements
//   .filter(v => v > 0)
//   .map((v, i, arr) => {
//     // console.log(arr);
//     return v * eurToUsd
//   })
//   // .map(v => v * eurToUsd)
//   .reduce((acc, v) => acc + v, 0);

// console.log(totalDepositsInUSD);

// // /////////////////////////////
// // FIND METHOD - Grazina pirma masyvo elementa, kuris atitinka salyga callbacke.

// const firstWithdrawl = movements.find(a => a < 0);
// console.log(movements);
// console.log(firstWithdrawl);


// console.log(accounts);
// // console.log(accounts.find(acc => acc.owner === 'Jessica Davis'));

// // Usimg For-of loop

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }


// // /////////////////////////////
// // FINDINDEX METHOD'as - Grazina masyvo elementa indexa (pirma,), kuris atitinka salyga callbacke.

// const currentAcc = accounts.find(acc => acc.pin === 4444);
// console.log(currentAcc);


// const index = accounts.findIndex(acc => acc.pin === currentAcc.pin);
// console.log(index);

// // // /////////////////////////////
// // // SOME & EVERY

// console.log(movements);
// //EQUALITY
// console.log(movements.includes(-130));

// //SOME: SPECIFY CONDITION
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// //EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));


// // Separate callback

// const deposit = mov => mov > 0
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//////////////////////////////
////  FLAT and FLATMAP

// const arr = [[[1, 2], 3], 4, [[5, 6], 7]];

// console.log(arr.flat());
// console.log(arr);
// console.log(arr.flat(2));


// const movsSum = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, v) => acc + v, 0);

// console.log(movsSum);

// //FLAT MAP  - iskarto sumapina ir sufaltina. suflatinti GALI TIK VIENA LYGI., Jeigu yra daugiau lygiu, reikia naudoti flat.

// const movsSum2 = accounts.flatMap(acc => acc.movements).reduce((acc, v) => acc + v, 0);
// console.log(movsSum2);


// // PROGRAMATIC CREATING NEW ARRAYS AND FILL THEM

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// Empty array + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 1));

x.fill(1);
x.fill(2, 3, 5)
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);



// ////////////CHALLENGE
// // Create arry with 100 random dice rolls


// const diceRollArr = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));

// console.log(diceRollArr);


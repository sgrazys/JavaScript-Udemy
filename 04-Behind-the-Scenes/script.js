'use strict';

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName} you are ${age} old, born in ${birthYear}`
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //Creating  NEW variables with same name as outer scope's variables
//       var millenial = true
//       // Reassigning  outer scope's variables
//       output = 'NEW OUTPUT';

//       const firstName = 'Bruce';
//       const str = `Oh, and your are a millenial, ${firstName}`;
//       console.log(str);

//       function addValues(a, b) {
//         return a + b
//       }

//     }

//     // console.log(str);
//     console.log(millenial);
//     // console.log(addValues(10, 5));
//     console.log(output);

//   }
//   printAge();

//   return age;
// }

// const firstName = 'Maikas';
// calcAge(1995);



// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Mike';
let job = 'student';
const year = 1975;

//Hoisting with functions
console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3));
console.log(addArrow);
// console.log(addArrow(2,3));


function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;


//Example. why we have to avoid using var 
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted');
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

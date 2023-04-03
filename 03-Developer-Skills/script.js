// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5, 21];
const temperatures2 = [3, -2, -6, -1, -19, 'error', 9, 13, 17, 15, 9, 5];

// 1) Understanding the problem
// - What is temperature amplitude? It is diffrences between highest and lowest  tem
// How to compute max and min temps?
// What a sensor error? And what to do?


// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in tem array
// - Find min value in tem array
// - Subtarct min from max (amplitude) and retur result.

const calcTempAmplitude = function (temps) {

  let max = temps[0];
  let min = temps[0]

  for (let i = 0; i < temps.length; i++) {

    const curentTemp = temps[i]
    if (typeof curentTemp !== 'number') continue;

    if (curentTemp > max) max = curentTemp;
    if (curentTemp < min) min = curentTemp;
  }

  return max - min;

}

const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude);


//PROBLEM 2
// Function should now receive 2 arrays of temp.
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// -  merge 2 arrays.

const calcTempAmplitudeNew = function (t1, t2) {

  const temps = t1.concat(t2)

  let max = temps[0];
  let min = temps[0]

  for (let i = 0; i < temps.length; i++) {

    const curentTemp = temps[i]
    if (typeof curentTemp !== 'number') continue;

    if (curentTemp > max) max = curentTemp;
    if (curentTemp < min) min = curentTemp;


  }
  return max - min;

}

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2)
console.log(amplitudeNew);
 */

///////////////////////////////////////
// DEBUGGING  using Chrome DEV Tools

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C) FIX BUG
    value: 10,
  };

  // B) FIND BUG
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);


  const kelvin = measurement.value + 273;
  return kelvin
}
// A) IDENTIFY
console.log(measureKelvin());


// USING A DEBUGGER
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {

    const curentTemp = temps[i]
    if (typeof curentTemp !== 'number') continue;

    if (curentTemp > max) max = curentTemp;
    if (curentTemp < min) min = curentTemp;


  }
  console.log(max, min);
  return max - min;

}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5])

//IDENTIFY
console.log(amplitudeBug);
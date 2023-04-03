/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BM Ivalues in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉 GOOD LUCK 😀
*/

// const markWeight = 95;
// const markHeight = 1.88;
// const jhonWeight = 85;
// const jhonHeight = 1.76;

const markWeight = 78;
const markHeight = 1.69;
const jhonWeight = 92;
const jhonHeight = 1.95;

const markBMI = (markWeight / markHeight ** 2).toFixed(2);
const jhonBMI = (jhonWeight / jhonHeight ** 2).toFixed(2);

if (markBMI > jhonBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's! ${jhonBMI}`);
} else {
    console.log(`John's BMI ${jhonBMI} is higher than Mark's ${markBMI}!`);
}



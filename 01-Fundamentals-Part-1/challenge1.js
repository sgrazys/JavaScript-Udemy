/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

//CALCULATION

const markWeight = 78;
const markHeight = 1.69;
const jhonWeight = 92;
const jhonHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const jhonBMI = jhonWeight / jhonHeight ** 2;

// const markBMI = markWeight / (markHeight * markHeight);

console.log(markBMI, jhonBMI);
const markHigherBMI = markBMI > jhonBMI;
console.log(markHigherBMI);

const markWeight2 = 95;
const markHeight2 = 1.88;
const jhonWeight2 = 85;
const jhonHeight2 = 1.76;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const jhonBMI2 = jhonWeight2 / jhonHeight2 ** 2;

const markHigherBMI2 = markBMI2 > jhonBMI2;
console.log(markBMI2, jhonBMI2, markHigherBMI2);


'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age} old, born in ${birthYear}`
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //Creating  NEW variables with same name as outer scope's variables
      var millenial = true
      // Reassigning  outer scope's variables
      output = 'NEW OUTPUT';

      const firstName = 'Bruce';
      const str = `Oh, and your are a millenial, ${firstName}`;
      console.log(str);

      function addValues(a, b) {
        return a + b
      }

    }

    // console.log(str);
    console.log(millenial);
    // console.log(addValues(10, 5));
    console.log(output);

  }
  printAge();

  return age;
}

const firstName = 'Maikas';
calcAge(1995);


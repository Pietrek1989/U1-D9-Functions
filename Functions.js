/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

function next(which) {
  return console.log(
    `--------------------Exercise ${which}--------------------\n`
  );
}
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

next(1);

function area(l1, l2) {
  return 0.5 * l1 * l2;
}
console.log(area(5, 3));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

next(2);

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(25, 100));
console.log(crazySum(25, 25));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

next(3);

function crazyDiff(crazyNum) {
  let resultCrazyNum = 19 - crazyNum;
  if (crazyNum <= 19) {
    return Math.abs(resultCrazyNum);
  } else {
    return Math.abs(resultCrazyNum * 3);
  }
}
console.log(crazyDiff(10));
console.log(crazyDiff(30));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
next(4);

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(9));
console.log(boundary(100));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
next(5);

function strivify(aString) {
  let wordStrive = "Strive";
  if (aString.startsWith("Strive")) {
    return aString;
  } else {
    return wordStrive + aString;
  }
}
console.log(strivify("Strive"));
console.log(strivify("ing"));
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

next(6);

function check3and7(positiveNum) {
  let absoluteNum = Math.abs(positiveNum);
  if (absoluteNum % 3 === 0 || absoluteNum % 7 === 0) {
    console.log(`The ${absoluteNum} is multiple of 3 or 7`);
    return true;
  } else {
    console.log(`The ${absoluteNum} is not a multiple of 3 or 7`);
    return false;
  }
}

console.log(check3and7(30));
console.log(check3and7(70));
console.log(check3and7(2));
console.log(check3and7(-30));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

next(7);

function reverseString(gonnabeReversed) {
  let reversing = "";
  for (let index = gonnabeReversed.length - 1; index >= 0; index--) {
    reversing += gonnabeReversed[index];
  }
  return reversing;
}

console.log(reverseString("!lamron ot kcab m'I yeH"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

//  Have to be for all words

next(8);

function upperFirst(wordToCapitalize) {
  let arr = wordToCapitalize.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr.join(" ");
}
let string = "haha";
string.console.log(upperFirst("heya and heya"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

next(9);

function cutString(cutFristAndLast) {
  let cutWord;
  cutWord = cutFristAndLast.slice(1, -1);
  return cutWord;
}
console.log(cutString("Cutting"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

next(10);

function giveMeRandom(n) {
  let setOfNumbers = [];
  let tempNumber;
  for (let i = 0; i < n; i++) {
    setOfNumbers += " " + Math.floor(Math.random() * 11);
  }
  return setOfNumbers;
}
console.log(giveMeRandom(8));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/


Block 14 Workshop: Loops and Arrays

// 1. Only Odds
function getOddNumbers(numbers) {
  let oddNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddNumbers.push(numbers[i]);
    }
  }

  return oddNumbers.length === 1 ? oddNumbers : oddNumbers;
}

let input1 = [2, 4, 6, 8, 11, 20, 15, 22];
console.log(getOddNumbers(input1)); 

let input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getOddNumbers(input2)); 

let input3 = [70, 42, 55, 81, 21, 91, 34];
console.log(getOddNumbers(input3)); 

let input4 = [2, 4, 6, 8, 10, 11, 12];
console.log(getOddNumbers(input4)); 

// a.  Array filter() Method

const numbers = [];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds);

// b. Array forEach() Method

const numbers = [];
const odds = [];
numbers.forEach((num) => {
  if (num % 2 === 1) {
    odds.push(num);
  }
});
console.log(odds); 

// c.  for…of Loop

const numbers = [];
const odds = [];
for (const num of numbers) {
  if (num % 2 === 1) {
    odds.push(num);
  }
}
console.log(odds); 





// 2.  Vowel versus Consonant

function countConsonantsAndVowels(word) {
  let consonants = 0;
  let vowels = 0;

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      vowels++;
    } else {
      consonants++;
    }
  }

  console.log(word + " has " + consonants + " consonants and " + vowels + " vowels");
}

countConsonantsAndVowels("hello");
countConsonantsAndVowels("ukelele");
countConsonantsAndVowels("awesome");
countConsonantsAndVowels("onomonopia");
countConsonantsAndVowels("textbook");



// 3 Reverse Array

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}


let input1 = [1, 2, 3];
let result1 = reverseArray(input1);
console.log(result1); 

let input2 = [1, 3, 5, 7, 9, 11];
let result2 = reverseArray(input2);
console.log(result2); 

let input3 = [20, 50, 30, 60, 200];
let result3 = reverseArray(input3);
console.log(result3); 

let input4 = [1, -1, 2, -3, 5, -8, 13];
let result4 = reverseArray(input4);
console.log(result4); 

// Using the reverse method. 
arr.reverse();
console.log(arr);

// Using a decrementing For Loop.

arr1 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i]);
}
console.log(arr1);

// Using the Unshift() Method.

arr1 = [];
arr.forEach(element => {
    arr1.unshift(element)
});
console.log(arr1);

// Without using a new array or the reverse() method.

arr = [1, 2, 3, 4];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
console.log(arr);

//Output: [4, 3, 2, 1]

// 4. FizzBuzz.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// JavaScript program to print Fizz Buzz
 
let i;
for (i=1; i<=100; i++)
{
    // number divisible by 3 and 5 will
    // always be divisible by 15, print
    // 'FizzBuzz' in place of the number
    if (i%15 == 0)   
        console.log("FizzBuzz" + " ");
     
    // number divisible by 3? print 'Fizz'
    // in place of the number
    else if ((i%3) == 0)
        console.log("Fizz" + " ");               
     
    // number divisible by 5, print 'Buzz'
    // in place of the number
    else if ((i%5) == 0)                   
        console.log("Buzz" + " ");               
 
    else // print the number       
        console.log(i + " ");               
}

// a.  solution

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

// b. solution

for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)


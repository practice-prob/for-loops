// Only Odds
// declare a function OnlyOdds that accepts an inputArray
// declare a variable newArray and set it to an empty array
// iterate through the inputArray using a for loop
    // if the element is odd, push it into the newArray
// return newArray

function onlyOdds (inputArray) {
    const newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 !== 0) {
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
}

console.log(onlyOdds([2, 4, 6, 8, 11, 20, 15, 22]));
console.log(onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(onlyOdds([70, 42, 55, 81, 21, 91, 34]));
console.log(onlyOdds([2, 4, 6, 8, 10, 11, 12] ));

// Vowel vs Consonant
// declare a function vowelVersusConsonant that accepts a string
// declare a variable consonantCounter and assign it to 0
// declare a variable vowelCounter and assign it to 0
// iterate through the string using a for loop
    // if the element is a vowel, increment vowelCounter
    // else, increment consonantCounter
// return "the string has consonantCounter consonants and vowelCounter vowels"

function vowelVersusConsonant(string) {
    let consonantCounter = 0;
    let vowelCounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            vowelCounter++;
        }
        else {
            consonantCounter++;
        }        
    }
    return `${string} has ${consonantCounter} consonants and ${vowelCounter} vowels`;
}

console.log(vowelVersusConsonant('hello'));
console.log(vowelVersusConsonant('ukelele'));
console.log(vowelVersusConsonant('awesome'));
console.log(vowelVersusConsonant('onomonopia'));
console.log(vowelVersusConsonant('textbook'));

// Reverse Array
// declare a function reverseArray taking in an inputArray
// declare a variable newArray and set it to an empty array
// iterate through the inputArray
    // pop each element off the inputArray and push it into the newArray
// return newArray

function reverseArray(inputArray) {
    const newArray = [];
    for (let i = inputArray.length-1; i >= 0; i--) {
        newArray.push(inputArray[i]);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([1, 3, 5, 7, 9, 11]));
console.log(reverseArray([20, 50, 30, 60, 200]));
console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));

// FizzBuzz
// declare a function called fizzBuzz
// iterate thru numbers 1-100 using a for loop
    // if number is divisible by 3 & 5, print "FizzBuzz" 
    // else if number is divisible by 3, print "Fizz" 
    // else if number is divislble by 5, print "Buzz" 
    // else print number


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 & i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0) {
            console.log("Fizz");
        }
        else if(i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz();
let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// More at MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number

// Challenge:

let makeGuess = function (guess) {
    return randomNum === guess;
}

console.log(makeGuess(1));

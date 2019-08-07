// Multiple arguments

let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);

console.log(result);

// Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name}, Score: ${score}`;
    // return 'Name: ' + name + ', Score: ' + score;
}

let scoreText = getScoreText(undefined, 99); 
console.log(scoreText);

// // Challenge:

// let getTip = function (total, tipPercent = .2) {
//     return total * tipPercent;
// }

// let firstTip = getTip(100);
// let secondTip = getTip(115, .15);

// console.log(firstTip);
// console.log(secondTip);

// Challenge 2:

let getTip = function (total, tipPercent = .2) {
    let tip = total * tipPercent;
    let percent = tipPercent * 100;
    return `A ${percent}% tip on $${total} would be $${tip}`;
}

let firstTip = getTip(100);
let secondTip = getTip(115, .15);

console.log(firstTip);
console.log(secondTip);

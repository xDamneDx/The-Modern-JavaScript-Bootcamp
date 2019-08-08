// Challenge:

let getStudentScore = function (score, maxScore = 100) {
    let percent = score / maxScore * 100;
    let grade;
    if (percent >= 90) {
        grade = 'A';
    } else if (percent >= 80) {
        grade = 'B';
    } else if (percent >= 70) {
        grade = 'C';
    } else if (percent >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return `You got a ${grade} (${percent}%)!`;
}

let firstStudentScore = getStudentScore(15, 20);
let secondStudentScore = getStudentScore(12, 20);

console.log(firstStudentScore);
console.log(secondStudentScore);

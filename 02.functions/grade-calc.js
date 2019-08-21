// Challenge:

// let getStudentScore = function (score, maxScore = 100) {
//     if (typeof score === 'number' && typeof score === 'number') {
//         let percent = score / maxScore * 100;
//         let grade;
//         if (percent >= 90) {
//             grade = 'A';
//         } else if (percent >= 80) {
//             grade = 'B';
//         } else if (percent >= 70) {
//             grade = 'C';
//         } else if (percent >= 60) {
//             grade = 'D';
//         } else {
//             grade = 'F';
//         }
//         return `You got a ${grade} (${percent}%)!`;
//     } else {
//         throw Error('Wrong input! Numbers only.');
//     }
// };

let getStudentScore = function (score, maxScore = 100) {
    if (typeof score !== 'number' || typeof score !== 'number') {
        throw Error('Wrong input! Numbers only.');
    }

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
};

try {
    let firstStudentScore = getStudentScore('seven', 20);
    console.log(firstStudentScore);
} catch (e) {
    console.log(e.message); // 'Wrong input! Numbers only.'
}

try {
    let secondStudentScore = getStudentScore(12, 20);
    console.log(secondStudentScore);
} catch (e) {
    console.log(e.message);
}

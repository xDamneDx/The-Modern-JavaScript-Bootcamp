// const getTip = (amount) => {
//     return amount * .25;
// };
// const result = getTip(true);
// console.log(result); // 0.25 (1 * .25 = 0.25)

// const getTip = (amount) => {
//     if (typeof amount === 'number') {
//         return amount * .25;
//     } else {
//         throw 'Argument must be a number';
//     }
// };
// const result = getTip(true);
// console.log(result); // error with message: 'Argument must be a number'

const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25;
    } else {
        throw Error('Argument must be a number');
    }
};
const result = getTip(true);
console.log(result); // error with more information


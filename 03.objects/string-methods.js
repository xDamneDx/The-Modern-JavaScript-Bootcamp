let name = '   Vladimir ';

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// More at MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String

// Challenge:

let isValidPassword = function (password) {
    // if (password.length > 8 && !password.includes('password')) {
    //     return true;
    // } else {
    //     return false;
    // }

    return password.length > 8 && !password.includes('password');
};

console.log(isValidPassword('qweh2'));
console.log(isValidPassword('qweh222hgato'));
console.log(isValidPassword('qweh2password1123'));

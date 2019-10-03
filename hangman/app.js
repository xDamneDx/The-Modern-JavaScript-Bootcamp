// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunct --> Function.prototype --> Object.prototype --> null
// Function: myString --> String.prototype --> Object.prototype --> null
// Function: myNumber --> Number.prototype --> Object.prototype --> null
// Function: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer';
const product = new String('Computer');
console.log(product);
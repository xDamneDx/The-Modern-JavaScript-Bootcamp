// Named export
// Default export

// export const add = (a, b) => a + b; // Named export
// export const name = 'Vladimir'; // Named export

// const square = (x) => x * x;
// export default square; // Default export

const add = (a, b) => a + b;
const name = 'Vladimir';
const square = (x) => x * x;

export { add, name, square as default }; // Named & Default exports

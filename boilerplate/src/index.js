import otherSquare, { add, name } from './utilities';
// import { scream } from './scream'; // Named import
import otherScream from './scream'; // Default import

console.log(add(10, 15)); // 25
console.log(name); // Vladimir
console.log(otherScream(name)); // VLADIMIR!
console.log(otherSquare(5)); // 25

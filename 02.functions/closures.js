// const myFunction = () => {
//     const message = 'This is my message';
//     const printMessage = () => {
//         console.log(message);
//     };
//     return printMessage;
// };

// const myPrintMessage = myFunction();
// myPrintMessage();

const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count;
        }
    }
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Ader
const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
}

const add10 = createAdder(10);
console.log(add10(-2)); // 8
console.log(add10(20)); // 30
const add100 = createAdder(100);
console.log(add100(-90)); // 10

// Tipper
const createTipper = (tip) => {
    return (bill) => {
        return tip * bill;
    }
}

const tip15 = createTipper(0.15);
const tip20 = createTipper(0.2);
console.log(tip15(75));
console.log(tip20(75));

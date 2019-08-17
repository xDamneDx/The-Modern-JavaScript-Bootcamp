// const square = (num) => {
//     return num * num;
// };

const square = (num) => num * num;
console.log(square);

const people = [{
    name: 'Vladimir',
    age: 33
}, {
    name: 'Alex',
    age: 27
}, {
    name: 'Chris',
    age: 26
}];

// const under30 = people.filter(function (person) {
//     return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const exactly33 = people.find((person) => person.age === 33);
console.log(exactly33.name);

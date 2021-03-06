// // Challenge 1: 

// const todos = ['Wake up', 'Have breakfast', 'Walk the dog', 'Feed the animals', 'Learn something new'];

// console.log(`You have ${todos.length} todos.`);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);

// // Challenge 2:

// const todos = ['Wake up', 'Have breakfast', 'Walk the dog', 'Feed the animals', 'Learn something new'];

// todos.splice(2, 1);
// todos.push('Take a break');
// todos.shift();

// console.log(`You have ${todos.length} todos.`);
// console.log(todos);

// // Challenge 3:

// const todos = ['Wake up', 'Have breakfast', 'Walk the dog', 'Feed the animals', 'Learn something new'];

// todos.splice(2, 1);
// todos.push('Take a break');
// todos.shift();

// console.log(`You have ${todos.length} todos.`);

// todos.forEach(function (todo, index) {
//     console.log(`${index + 1}. ${todo}`);
// });

// // Challenge 4:

// const todos = ['Wake up', 'Have breakfast', 'Walk the dog', 'Feed the animals', 'Learn something new'];

// todos.splice(2, 1);
// todos.push('Take a break');
// todos.shift();

// console.log(`You have ${todos.length} todos.`);

// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}. ${todos[count]}`);
// }

// // Challenge 5:

// const todos = [{
//     text: 'Wake up',
//     completed: false
// }, {
//     text: 'Have breakfast',
//     completed: false
// }, {
//     text: 'Walk the dog',
//     completed: false
// }, {
//     text: 'Feed the animals',
//     completed: false
// }, {
//     text: 'Learn something new',
//     completed: false
// }];

// const deleteTodo = function (array, todoText) {
//     const index =  array.findIndex(function (todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase();
//     });

//     if (index > -1) {
//         array.splice(index, 1);
//     }
// };

// deleteTodo(todos, 'have breakFast');
// console.log(todos);

// // Challenge 6:

// const todos = [{
//     text: 'Wake up',
//     completed: true
// }, {
//     text: 'Have breakfast',
//     completed: true
// }, {
//     text: 'Walk the dog',
//     completed: true
// }, {
//     text: 'Feed the animals',
//     completed: false
// }, {
//     text: 'Learn something new',
//     completed: false
// }];

// const getThingsToDo = function (array) {
//     return array.filter(function (todo) {
//         return !todo.completed;
//     });
// };

// console.log(getThingsToDo(todos));

// Challenge 7:

const todos = [{
    text: 'Wake up',
    completed: true
}, {
    text: 'Have breakfast',
    completed: true
}, {
    text: 'Walk the dog',
    completed: true
}, {
    text: 'Feed the animals',
    completed: false
}, {
    text: 'Learn something new',
    completed: false
}];

const sortTodos = function (array) {
    array.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1;
        } else if (b.completed < a.completed) {
            return 1;
        } else {
            return 0;
        }
    });
};

sortTodos(todos);
console.log(todos);

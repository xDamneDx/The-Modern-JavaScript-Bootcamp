// // Challenge 1:

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('Fourth')) {
//         paragraph.remove();
//     }
// });

// // Challenge 2:

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

// const leftTodos = todos.filter(function (todo) {
//     return !todo.completed;
// });

// const summary = document.createElement('h3');
// summary.textContent = `You have ${leftTodos.length} todos left:`;
// document.querySelector('body').appendChild(summary);

// todos.forEach(function (todo) {
//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = `- ${todo.text}`;
//     document.querySelector('body').appendChild(newParagraph);
// });

// // Challenge 3:

// document.querySelector('button').addEventListener('click', function () {
//     console.log('New todo was added');
// })

// Challenge 4:

document.querySelector('#add-todo').addEventListener('click', function () {
    console.log('New todo was added');
})

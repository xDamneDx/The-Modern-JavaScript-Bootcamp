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

// // Challenge 4:

// document.querySelector('#add-todo').addEventListener('click', function () {
//     console.log('New todo was added');
// })

// // Challenge 5:

// document.querySelector('#new-todo-text').addEventListener('input', function (evt) {
//     console.log(evt.target.value);
// })

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

// const filters = {
//     searchText: ''
// };

// const renderTodos = function (array, filters) {
//     const filteredTodos = array.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
//     });

//     const leftTodos = filteredTodos.filter(function (todo) {
//         return !todo.completed;
//     });

//     document.querySelector('#todos').innerHTML = '';

//     const summary = document.createElement('h3');
//     summary.textContent = `You have ${leftTodos.length} todos left:`;
//     document.querySelector('#todos').appendChild(summary);

//     filteredTodos.forEach(function (todo) {
//         const newParagraph = document.createElement('p');
//         newParagraph.textContent = `- ${todo.text}`;
//         document.querySelector('#todos').appendChild(newParagraph);
//     });
// };

// renderTodos(todos, filters);

// document.querySelector('#todo-search').addEventListener('input', function (evt) {
//     filters.searchText = evt.target.value;

//     renderTodos(todos, filters);
// });

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

// const filters = {
//     searchText: ''
// };

// const renderTodos = function (array, filters) {
//     const filteredTodos = array.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
//     });

//     const leftTodos = filteredTodos.filter(function (todo) {
//         return !todo.completed;
//     });

//     document.querySelector('#todos').innerHTML = '';

//     const summary = document.createElement('h3');
//     summary.textContent = `You have ${leftTodos.length} todos left:`;
//     document.querySelector('#todos').appendChild(summary);

//     filteredTodos.forEach(function (todo) {
//         const newParagraph = document.createElement('p');
//         newParagraph.textContent = `- ${todo.text}`;
//         document.querySelector('#todos').appendChild(newParagraph);
//     });
// };

// renderTodos(todos, filters);

// document.querySelector('#todo-search').addEventListener('input', function (evt) {
//     filters.searchText = evt.target.value;

//     renderTodos(todos, filters);
// });

// document.querySelector('#todo-form').addEventListener('submit', function (evt) {
//     evt.preventDefault();

//     todos.push({
//         text: evt.target.elements.todoText.value,
//         completed: false
//     });

//     evt.target.elements.todoText.value = '';

//     renderTodos(todos, filters);
// });

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

const filters = {
    searchText: '',
    hideCompleted: false
};

const renderTodos = function (array, filters) {
    const filteredTodos = array.filter(function (todo) {
        if (filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        }
    });

    const leftTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h3');
    summary.textContent = `You have ${leftTodos.length} todos left:`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function (todo) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `- ${todo.text}`;
        document.querySelector('#todos').appendChild(newParagraph);
    });
};

renderTodos(todos, filters);

document.querySelector('#todo-search').addEventListener('input', function (evt) {
    filters.searchText = evt.target.value;

    renderTodos(todos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', function (evt) {
    evt.preventDefault();

    todos.push({
        text: evt.target.elements.todoText.value,
        completed: false
    });

    evt.target.elements.todoText.value = '';

    renderTodos(todos, filters);
});

document.querySelector('#hide-completed').addEventListener('change', function (evt) {
    filters.hideCompleted = evt.target.checked;

    renderTodos(todos, filters);
});
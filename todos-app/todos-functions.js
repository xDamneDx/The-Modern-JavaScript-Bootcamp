// Fetch existing todos from localStorage
// getSavedTodos

const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');

    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};

// Save todos to localStorage
// saveTodos

const saveTodos = function (array) {
    localStorage.setItem('todos', JSON.stringify(array));
};

// Get the DOM element for individual todo
// generateTodoDOM

const generateTodoDOM = function (todo) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `- ${todo.text}`;
    return newParagraph;
};

// Get the DOM element for list summary
// generateSummaryDOM

const generateSummaryDOM = function (leftTodos) {
    const summary = document.createElement('h3');
    summary.textContent = `You have ${leftTodos.length} todos left:`;
    return summary;
};

// Render application todos based on filters
// renderTodos

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

    const summary = generateSummaryDOM(leftTodos);
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function (todo) {
        const todoEl = generateTodoDOM(todo);
        document.querySelector('#todos').appendChild(todoEl);
    });
};

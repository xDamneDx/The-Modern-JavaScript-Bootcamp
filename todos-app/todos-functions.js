// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    return todosJSON ? JSON.parse(todosJSON) : [];
};

// Save todos to localStorage
const saveTodos = (array) => {
    localStorage.setItem('todos', JSON.stringify(array));
};

// Remove todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
};

// Toggle todo completion
const toggleTodo = (todo) => {
    todo.completed = !todo.completed;
};

// Get the DOM element for individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoTitle = document.createElement('span');
    const removeButton = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        toggleTodo(todo);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    todoTitle.textContent = ` ${todo.text} `;

    removeButton.textContent = 'x';
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    todoEl.appendChild(checkbox);
    todoEl.appendChild(todoTitle);
    todoEl.appendChild(removeButton);

    return todoEl;
};

// Get the DOM element for list summary
const generateSummaryDOM = (leftTodos) => {
    const summary = document.createElement('h3');
    summary.textContent = `You have ${leftTodos.length} todos left:`;
    return summary;
};

// Render application todos based on filters
const renderTodos = (array, filters) => {
    const filteredTodos = array.filter((todo) => {
        if (filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        }
    });

    const leftTodos = filteredTodos.filter((todo) => !todo.completed);

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(leftTodos));

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};

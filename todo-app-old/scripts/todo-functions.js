'use script'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (error) {
        return [];
    }
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
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoTitle = document.createElement('span');
    const removeButton = document.createElement('button');

    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
        toggleTodo(todo);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    todoTitle.textContent = ` ${todo.text} `;

    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    containerEl.appendChild(checkbox);
    containerEl.appendChild(todoTitle);
    todoEl.appendChild(containerEl);
    todoEl.appendChild(removeButton);

    return todoEl;
};

// Get the DOM element for list summary
const generateSummaryDOM = (leftTodos) => {
    const summary = document.createElement('h2');
    const plural = leftTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${leftTodos.length} todo${plural} left:`;
    return summary;
};

// Render application todos based on filters
const renderTodos = (array, filters) => {
    const todoEl = document.querySelector('#todos');
    const filteredTodos = array.filter((todo) => {
        if (filters.hideCompleted) {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
        } else {
            return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        }
    });

    const leftTodos = filteredTodos.filter((todo) => !todo.completed);

    todoEl.innerHTML = '';
    todoEl.appendChild(generateSummaryDOM(leftTodos));

    console.log(filteredTodos);
    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo));
        });
    } else {
        const emptyMessageEl = document.createElement('p');
        emptyMessageEl.classList.add('empty-message');
        emptyMessageEl.textContent = `No to-do's to show`;
        todoEl.appendChild(emptyMessageEl);
    }    
};

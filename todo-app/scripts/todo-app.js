'use script'

const todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector('#todo-search').addEventListener('input', (evt) => {
    filters.searchText = evt.target.value;
    renderTodos(todos, filters);
});

document.querySelector('#todo-form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputText = evt.target.elements.todoText.value.trim();
    if (inputText > 0) {
        todos.push({
            id: uuidv4(),
            text: inputText,
            completed: false
        });
        saveTodos(todos);
        evt.target.elements.todoText.value = '';
        renderTodos(todos, filters);
    } else {
        evt.target.elements.todoText.value = '';
    }
});

document.querySelector('#hide-completed').addEventListener('change', (evt) => {
    filters.hideCompleted = evt.target.checked;
    renderTodos(todos, filters);
});
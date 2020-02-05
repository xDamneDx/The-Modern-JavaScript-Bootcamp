import { setFilters } from './filters';
import { loadTodos, createTodo } from './todos';
import { renderTodos, } from './views';

renderTodos();

document.querySelector('#todo-search').addEventListener('input', (evt) => {
    setFilters({
        searchText: evt.target.value
    })
    renderTodos();
});

document.querySelector('#hide-completed').addEventListener('change', (evt) => {
    setFilters({
        hideCompleted: evt.target.checked
    })
    renderTodos();
});

document.querySelector('#todo-form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputText = evt.target.elements.todoText.value.trim();
    if (inputText.length > 0) {
        createTodo(inputText);
        evt.target.elements.todoText.value = '';
        renderTodos();
    } else {
        evt.target.elements.todoText.value = '';
    }
});

window.addEventListener('storage', function (e) {
    if (e.key === 'todos') {
        loadTodos();
        renderTodos();
    }
})

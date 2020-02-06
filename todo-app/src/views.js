import { getFilters } from './filters';
import { getTodos, removeTodo, toggleTodo } from './todos';

const renderTodos = () => {
    const { searchText, hideCompleted } = getFilters();
    const todoEl = document.querySelector('#todos');
    const filteredTodos = getTodos().filter((todo) => {
        if (hideCompleted) {
            return todo.text.toLowerCase().includes(searchText.toLowerCase()) && !todo.completed;
        } else {
            return todo.text.toLowerCase().includes(searchText.toLowerCase());
        }
    });

    const leftTodos = filteredTodos.filter((todo) => !todo.completed);

    todoEl.innerHTML = '';
    todoEl.appendChild(generateSummaryDOM(leftTodos));

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
        toggleTodo(todo.id);
        renderTodos();
    });

    todoTitle.textContent = ` ${todo.text} `;

    removeButton.textContent = 'remove';
    removeButton.classList.add('button', 'button--text');
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        renderTodos();
    });

    containerEl.appendChild(checkbox);
    containerEl.appendChild(todoTitle);
    todoEl.appendChild(containerEl);
    todoEl.appendChild(removeButton);

    return todoEl;
};

const generateSummaryDOM = (leftTodos) => {
    const summary = document.createElement('h2');
    const plural = leftTodos.length === 1 ? '' : 's';
    summary.classList.add('list-title');
    summary.textContent = `You have ${leftTodos.length} todo${plural} left:`;
    return summary;
};

export { renderTodos, generateSummaryDOM, generateTodoDOM };

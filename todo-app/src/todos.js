import uuidv4 from 'uuid/v4';

let todos = [];

const loadTodos = () => {
    const todosJSON = JSON.parse(localStorage.getItem('todos'));

    try {
        todos = todosJSON ? todosJSON : [];
    } catch (e) {
        todos = [];
    }
};

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => todos;

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    });
    saveTodos(todos);
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1);
    }
    saveTodos();
}

const toggleTodo = (id) => {
    const todo = todos.find((note) => note.id === id);
    if (todo) {
        todo.completed = !todo.completed;
    }
    saveTodos();
};

loadTodos();

export { loadTodos, getTodos, createTodo, removeTodo, toggleTodo };

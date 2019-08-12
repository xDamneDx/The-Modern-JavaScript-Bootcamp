// DOM - Document Object Model

// // Query and remove:

// const p = document.querySelector('p');
// p.remove();

// Query all and remove:

// const ps = document.querySelectorAll('p');

// ps.forEach(function (p) {
//     p.textContent = '******'
//     // console.log(p.textContent);
//     // p.remove();
// });

// Add a new element:

// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new element from JavaScript';
// document.querySelector('body').appendChild(newParagraph);

// const notes = [{
//     title: 'My next trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
// }];

let notes = [];

const filters = {
    searchText: ''
}

// Check for existing save data:

const notesJSON = localStorage.getItem('notes');

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON);
}

// const user = {
//     name: 'Vladimir',
//     age: 33
// }

// const userJSON = JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);

// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}`);

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().contains(filters.searchText.toLowerCase());
    });

    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');

        if (note.title.length > 0) {
            noteEl.textContent = note.title;
        } else {
            noteEl.textContent = 'Unnamed note';
        }
        
        document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function () {
    notes.push({
        title: '',
        body: ''
    });

    localStorage.setItem('notes', JSON.stringify(notes));

    renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// });

// document.querySelector('#for-fun').addEventListener('change', function (e) {
//     console.log(e.target.checked);
// });

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value);
});

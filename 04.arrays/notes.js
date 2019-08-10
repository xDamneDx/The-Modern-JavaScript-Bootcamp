// const notes = ['Note 1', 'Note 2', 'Note 3'];

// notes.pop();
// notes.push('My new note');

// console.log(notes.shift());
// notes.unshift('My new note');

// notes.splice(1, 1, 'This is the new second note');

// notes[2] = 'This is now the new note 3';

// notes.forEach(function (item, index) {
//     console.log(index);    
//     console.log(item);
// })

// console.log(notes.length);
// console.log(notes[0]);

// for (let count = 0; count <= 2; count++) {
//     console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count]);
// }

const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
};

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
};

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    });
};

sortNotes(notes);
console.log(notes);

console.log(findNotes(notes, 'work'));

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     });
//     return notes[index];
// }

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habbits to work on';
// });

// console.log(index);

const note = findNote(notes, 'office modification');
console.log(note);

// More at: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array
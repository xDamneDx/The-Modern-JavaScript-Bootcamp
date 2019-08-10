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

document.querySelector('#create-note').addEventListener('click', function () {
    console.log('New note created');
});

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove();
    });
});

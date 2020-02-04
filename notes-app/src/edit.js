import { initializedEditPage, generateLastEdited } from './views';
import { updateNote, removeNote } from './notes';

const titleElement = document.querySelector('#note-title');
const bodyElement = document.querySelector('#note-body');
const updatedElement = document.querySelector('#updated-at');
const removeElement = document.querySelector('#remove-note');

const noteId = location.hash.substring(1);

initializedEditPage(noteId);

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    updatedElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    updatedElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener('click', () => {
    removeNote(noteId);
    location.assign('index.html');
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializedEditPage(noteId);
    }
})

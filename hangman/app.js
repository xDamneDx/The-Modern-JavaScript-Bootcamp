const puzzleEl = document.querySelector('#puzzle');
const statusEl = document.querySelector('#status');
const firstGame = new Hangman('Cat', 2);

puzzleEl.textContent = `Word: ${firstGame.puzzle}`;
statusEl.textContent = firstGame.message;

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    firstGame.makeGuess(guess);
    puzzleEl.textContent = `Word: ${firstGame.puzzle}`;
    statusEl.textContent = firstGame.message;
});

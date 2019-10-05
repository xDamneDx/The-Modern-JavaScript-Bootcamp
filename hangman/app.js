const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status');
const firstGame = new Hangman('Cat', 2);

puzzleEl.textContent = `Word: ${firstGame.getPuzzle()}`;
guessesEl.textContent = `Remaining guesses: ${firstGame.remainingGuesses}`;
statusEl.textContent = firstGame.getMessage();

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    firstGame.makeGuess(guess);
    puzzleEl.textContent = `Word: ${firstGame.getPuzzle()}`;
    guessesEl.textContent = `Remaining guesses: ${firstGame.remainingGuesses}`;
    statusEl.textContent = firstGame.getMessage();
});
